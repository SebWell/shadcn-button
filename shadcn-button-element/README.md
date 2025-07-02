# Shadcn Button Component

This is a **Shadcn Button** component for [weweb.io](https://www.weweb.io/) that replicates the exact design and behavior of Shadcn UI buttons.

## ✨ Features

- **6 Variants**: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`
- **4 Sizes**: `sm` (36px), `default` (40px), `lg` (44px), `icon` (40x40px)
- **Icons Support**: Left and right icons using ww-icon
- **Exact Shadcn Colors**: HSL color system matching Shadcn UI
- **Accessibility**: Focus states and disabled support
- **Events**: Click event with Weweb integration

## 🚀 Installation

To run locally, first install all dependencies:
```bash
npm install
```

## 🔧 Development

To serve locally for development:
```bash
npm run serve --port=3000
```

Then go to Weweb editor, open the developer popup and add your custom element:
`http://localhost:3000`

## 📦 Build

Before release, check for build errors:
```bash
npm run build --name=shadcn-button
```

## 🎨 Usage in Weweb

1. **Button text**: The text displayed in the button
2. **Variant**: Choose the style (default, destructive, outline, etc.)
3. **Size**: Choose the size (small, default, large, icon)
4. **Disabled**: Toggle to disable the button
5. **Type**: HTML button type (button, submit, reset)
6. **Icons**: Add left/right icons using ww-icon components

## 🎯 Variants Preview

- **Default**: Dark primary button with white text
- **Destructive**: Red button for dangerous actions
- **Outline**: Transparent with border for secondary actions
- **Secondary**: Light gray button for alternative actions
- **Ghost**: Transparent button with hover effect
- **Link**: Underlined text button for navigation

## 🤝 Contributing

This component follows Shadcn UI design system and Weweb component standards.
