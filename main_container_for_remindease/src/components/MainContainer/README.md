# MainContainer Component for RemindEase

The MainContainer is the primary container component for the RemindEase application, implementing a skeuomorphic design with dark/light theme support.

## Features

- **Skeuomorphic Design**: Uses design elements that mimic real-world objects with textures, shadows, and 3D effects
- **Theme Support**: Built-in dark and light theme support with toggle functionality
- **Responsive Layout**: Adapts to different screen sizes with mobile-friendly view
- **Sidebar Navigation**: Includes sidebar with navigation menu and categories
- **Modular Structure**: Designed to contain any content through its children props

## Usage

```jsx
import { ThemeProvider } from '../../context/ThemeContext';
import MainContainer from './MainContainer';

function App() {
  return (
    <ThemeProvider>
      <MainContainer>
        {/* Your content goes here */}
        <h1>Hello, RemindEase!</h1>
      </MainContainer>
    </ThemeProvider>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | Content to be rendered inside the main content area |
| className | string | '' | Additional CSS class names for the container |

## Structure

The MainContainer consists of:

1. **Header**: Contains the RemindEase logo and theme toggle button
2. **Sidebar**: 
   - Navigation menu with preset reminder filters (All, Important, Today, etc.)
   - Categories section with color-coded categories
3. **Main Content Area**: Flexible content area where children are rendered

## Skeuomorphic Design Elements

- **Texture Overlays**: Paper-like textures for cards and backgrounds
- **Realistic Shadows**: Multi-layered shadows to create depth
- **3D Effects**: Gradient backgrounds and inset elements
- **Tactile Feedback**: Visual feedback on interactive elements

## Theme Support

The component uses the ThemeContext to toggle between dark and light themes. The theme state is persisted in localStorage and also respects the user's system preference by default.

## Customization

The component's appearance can be customized through CSS variables defined in App.css.
