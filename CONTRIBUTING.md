# Contributing to Rapid Play

Thank you for your interest in contributing to Rapid Play! This document provides guidelines and information for contributors.

## 🚀 Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   \`\`\`bash
   git clone https://github.com/yourusername/rapid-play.git
   cd rapid-play
   \`\`\`
3. **Install dependencies**:
   \`\`\`bash
   npm install
   \`\`\`
4. **Set up environment variables** (see README.md)
5. **Create a new branch** for your feature:
   \`\`\`bash
   git checkout -b feature/your-feature-name
   \`\`\`

## 📋 Development Guidelines

### Code Style

- Use TypeScript for all new code
- Follow the existing code style and formatting
- Use meaningful variable and function names
- Add comments for complex logic
- Ensure responsive design for all UI changes

### Commit Messages

Use clear and descriptive commit messages:
- \`feat: add playlist comparison feature\`
- \`fix: resolve scrolling issue on mobile\`
- \`docs: update API setup instructions\`
- \`style: improve button hover effects\`

### Testing

- Test your changes on multiple devices and browsers
- Verify that the application works with different playlist sizes
- Ensure API quota usage is reasonable
- Test error handling scenarios

## 🐛 Bug Reports

When reporting bugs, please include:
- Browser and version
- Device type and screen size
- Steps to reproduce the issue
- Expected vs actual behavior
- Screenshots if applicable
- Console error messages

## 💡 Feature Requests

For new features, please:
- Check if the feature already exists or is planned
- Describe the use case and benefits
- Provide mockups or examples if applicable
- Consider the impact on API quota usage

## 🔧 Areas for Contribution

We welcome contributions in these areas:

### Features
- Playlist comparison functionality
- Video list view with thumbnails
- Playlist history and favorites
- Export functionality (PDF, CSV)
- Dark/light theme toggle
- Keyboard shortcuts

### Improvements
- Performance optimizations
- Better error handling
- Accessibility improvements
- Mobile experience enhancements
- Loading state improvements

### Documentation
- API documentation
- Code comments
- User guides
- Video tutorials

## 📝 Pull Request Process

1. **Update documentation** if needed
2. **Test thoroughly** on different devices
3. **Update the README** if you've added new features
4. **Ensure your code follows** the existing style
5. **Write clear commit messages**
6. **Submit the pull request** with a detailed description

### Pull Request Template

\`\`\`markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Tested with large playlists
- [ ] Tested error scenarios

## Screenshots
(if applicable)
\`\`\`

## 🏗️ Project Structure

Understanding the codebase:

- \`app/\` - Next.js app router pages and API routes
- \`components/\` - React components
- \`lib/\` - Utility functions and API logic
- \`public/\` - Static assets

## 🔒 Security

- Never commit API keys or sensitive data
- Use environment variables for configuration
- Validate all user inputs
- Follow security best practices

## 📞 Getting Help

- Check existing issues and discussions
- Join our community discussions
- Ask questions in pull request comments
- Contact maintainers for major changes

## 🙏 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes for significant contributions
- GitHub contributors page

Thank you for helping make Rapid Play better! 🚀
