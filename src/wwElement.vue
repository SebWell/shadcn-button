<template>
    <div class="button-container" :style="colorVariables">
        <!-- BOUTON SIMPLE avec couleurs personnalisables -->
        <button 
            class="shadcn-button"
            :class="[content.variant || 'default', content.size || 'default']"
            type="button"
            :disabled="content.disabled"
            @focus="onFocus"
            @blur="onBlur"
            @mousedown="onActivate"
            @mouseup="onDeactivate"
            @touchstart="onTouchActivate"
            @touchend="onDeactivate"
            @keydown.enter="onActivate"
            @keydown.space="onActivate"
            @click="handleClick"
        >
        <wwElement v-if="content.hasLeftIcon" v-bind="content.leftIcon" />
        <i 
            v-if="content.showIcon && content.iconName" 
            :data-lucide="content.iconName"
            class="button-icon"
        ></i>
        <div v-if="content.variant === 'loading'" class="loading-spinner"></div>
        <wwText 
            v-if="content.variant !== 'icon'" 
            tag="span" 
            :text="text" 
            class="button-text" 
        />
        <wwElement v-if="content.hasRightIcon" v-bind="content.rightIcon" />
        </button>
    </div>
</template>

<script>
export default {
    name: 'ShadcnButton',
    props: {
        content: { type: Object, required: true },
        wwElementState: { type: Object, required: true },
        /* wwEditor:start */
        wwEditorState: { type: Object, required: true },
        /* wwEditor:end */
    },
    emits: ["trigger-event"],
    data() {
        return {
            isReallyFocused: false,
            isReallyActive: false,
        };
    },
    mounted() {
        // Vérification avec timeout pour éviter les blocages
        this.loadLucideIcons().catch(() => {
            console.warn('Lucide icons failed to load from CDN');
        });
    },
    updated() {
        this.$nextTick(() => {
            if (window.lucide) {
                window.lucide.createIcons();
            }
        });
    },
    computed: {
        text() {
            if (this.content.variant === 'loading') {
                return this.content.loadingText || 'Loading...';
            }
            return this.content.text || 'Button';
        },

        colorVariables() {
            return {
                '--custom-primary': this.content.primaryColor || 'hsl(222.2, 47.4%, 11.2%)',
                '--custom-primary-foreground': this.content.primaryForeground || 'hsl(210, 40%, 98%)',
                '--custom-destructive': this.content.destructiveColor || 'hsl(0, 84.2%, 60.2%)',
                '--custom-destructive-foreground': this.content.destructiveForeground || 'hsl(210, 40%, 98%)',
                '--custom-secondary': this.content.secondaryColor || 'hsl(210, 40%, 96%)',
                '--custom-secondary-foreground': this.content.secondaryForeground || 'hsl(222.2, 84%, 4.9%)',
                '--custom-border': this.content.borderColor || 'hsl(214.3, 31.8%, 91.4%)'
            };
        }
    },
    methods: {
        onFocus() {
            this.isReallyFocused = true;
            this.$emit('trigger-event', { name: 'focus' });
        },
        
        onBlur() {
            this.isReallyFocused = false;
            this.$emit('trigger-event', { name: 'blur' });
        },
        
        onActivate() {
            if (!this.content.disabled) {
                this.isReallyActive = true;
            }
        },
        
        onDeactivate() {
            this.isReallyActive = false;
        },
        
        onTouchActivate(event) {
            event.preventDefault();
            this.onActivate();
        },
        
        handleClick(event) {
            if (this.content.disabled || this.content.variant === 'loading') {
                event.preventDefault();
                return;
            }
            
            this.$emit("trigger-event", {
                name: "click",
                event: { 
                    domEvent: event,
                    value: this.content.text || '',
                    variant: this.content.variant,
                    size: this.content.size
                }
            });
        },
        
        async loadLucideIcons() {
            if (window.lucide) {
                this.refreshIcons();
                return;
            }
            
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = 'https://unpkg.com/lucide@latest/dist/umd/lucide.js';
                script.onload = () => {
                    this.refreshIcons();
                    resolve();
                };
                script.onerror = reject;
                
                // Timeout après 5 secondes
                setTimeout(() => reject(new Error('Timeout')), 5000);
                document.head.appendChild(script);
            });
        },
        
        refreshIcons() {
            this.$nextTick(() => {
                if (window.lucide) {
                    window.lucide.createIcons();
                }
            });
        },
        
        refreshLucide() {
            if (window.lucide) {
                const icons = this.$el.querySelectorAll('[data-lucide]');
                icons.forEach(icon => {
                    icon.innerHTML = '';
                    icon.removeAttribute('data-icon');
                });
                window.lucide.createIcons();
            }
        }
    },
    
    watch: {
        'content.iconName'() { this.$nextTick(() => this.refreshLucide()); },
        'content.showIcon'() { this.$nextTick(() => this.refreshLucide()); }
    }
};
</script>

<style scoped>
/* COMME LE PLAYER IA: CSS scoped direct */
.button-container {
    display: inline-block;  /* Taille du contenu, pas toute la largeur */
    padding: 0;
    box-sizing: border-box;
}

.shadcn-button {
    background: none;
    border: 1px solid;
    cursor: pointer;
    padding: 8px 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border-radius: 6px;
    font-weight: 500;
    font-size: 14px;
    transition: all 0.2s;
    outline: none;

}

/* ===== VARIANTS (styles de base d'abord) ===== */
.shadcn-button.default {
    background-color: var(--custom-primary);
    color: var(--custom-primary-foreground);
    border-color: var(--custom-primary);
}

.shadcn-button.destructive {
    background-color: var(--custom-destructive);
    color: var(--custom-destructive-foreground);
    border-color: var(--custom-destructive);
}

.shadcn-button.secondary {
    background-color: var(--custom-secondary);
    color: var(--custom-secondary-foreground);
    border-color: var(--custom-secondary);
}

.shadcn-button.outline {
    background-color: transparent;
    color: var(--custom-primary);
    border-color: var(--custom-border);
}

.shadcn-button.ghost {
    background-color: transparent;
    color: var(--custom-primary);
    border-color: transparent;
}

.shadcn-button.link {
    background-color: transparent;
    color: var(--custom-primary);
    border-color: transparent;
    text-decoration: none;
    padding: 0;
    height: auto;
}

.shadcn-button.icon {
    background-color: var(--custom-primary);
    color: var(--custom-primary-foreground);
    border-color: var(--custom-primary);
    width: 40px;                                /* Carré pour icon-only */
    height: 40px;
    padding: 0;                                 /* Pas de padding pour icon */
}

.shadcn-button.loading {
    background-color: var(--custom-secondary);
    color: var(--custom-secondary-foreground);
    border-color: var(--custom-secondary);
}

.shadcn-button.lg {
    padding: 10px 24px;
    font-size: 16px;
}

.shadcn-button.sm {
    padding: 6px 12px;
    font-size: 12px;
}

/* Tailles spéciales pour icon variant */
.shadcn-button.icon.sm {
    width: 32px;
    height: 32px;
    padding: 0;
}

.shadcn-button.icon.lg {
    width: 48px;
    height: 48px;
    padding: 0;
}

/* Exception pour link qui ne doit pas avoir de taille fixe */
.shadcn-button.link.sm,
.shadcn-button.link.lg {
    padding: 0;
    height: auto;
}

/* ===== HOVER STATES (à la fin pour surcharger) ===== */
.shadcn-button.default:hover:not(.disabled) {
    opacity: 0.9;
}

.shadcn-button.destructive:hover:not(.disabled) {
    opacity: 0.9;
}

.shadcn-button.secondary:hover:not(.disabled) {
    opacity: 0.8;
}

.shadcn-button.outline:hover:not(.disabled) {
    background-color: var(--custom-secondary);
    color: var(--custom-secondary-foreground);
}

.shadcn-button.ghost:hover:not(.disabled) {
    background-color: var(--custom-secondary);
    color: var(--custom-secondary-foreground);
}

.shadcn-button.link:hover:not(.disabled) {
    text-decoration: underline;
    text-underline-offset: 4px;
}

.shadcn-button.icon:hover:not(.disabled) {
    opacity: 0.9;
}

.shadcn-button.loading:hover:not(.disabled) {
    opacity: 0.8;
}

/* ===== FOCUS & ACTIVE STATES ===== */
.shadcn-button:focus {
    outline: none;
}

.shadcn-button:active {
    transform: scale(0.98);
}

.shadcn-button.disabled {
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
}

.button-icon {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
}

.button-text {
    flex-shrink: 0;
    white-space: nowrap;
}

.loading-spinner {
    width: 16px;
    height: 16px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top: 2px solid currentColor;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-right: 8px;
    flex-shrink: 0;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>

<!-- Import global pour les variables CSS seulement -->
<style>
@import './globals.css';
</style>