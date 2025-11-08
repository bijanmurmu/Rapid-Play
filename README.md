# Rapid Play - YouTube Playlist Analyzer

A modern web application that analyzes YouTube playlists to provide detailed statistics including total duration, video count, and optimal playback speeds for efficient viewing.

![Rapid Play Screenshot](https://via.placeholder.com/800x400/181818/FF0000?text=Rapid+Play+YouTube+Playlist+Analyzer)

## ✨ Features

- 📊 **Comprehensive Playlist Analysis**: Get detailed statistics about any public YouTube playlist
- ⏱️ **Multiple Playback Speeds**: Calculate watch times at 1.25x, 1.5x, 1.75x, 2x, and custom speeds
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **YouTube-Inspired Dark Theme**: Beautiful dark interface with red accent colors
- 🚀 **Real-time Data**: Fetches live data from YouTube's API
- 🔒 **Secure API Integration**: Server-side API calls to protect sensitive keys

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- A YouTube Data API v3 key (free from Google Cloud Console)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/bijanmurmu/rapid-play.git
   cd rapid-play
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```

4. **Configure your YouTube API key**
   
   Edit `.env.local` and add your YouTube Data API key:
   ```env
   YOUTUBE_API_KEY=your_youtube_api_key_here
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔑 Getting a YouTube API Key

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **YouTube Data API v3**:
   - Navigate to "APIs & Services" > "Library"
   - Search for "YouTube Data API v3"
   - Click on it and press "Enable"
4. Create credentials:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy the generated API key
5. (Optional) Restrict the API key:
   - Click on the API key to edit it
   - Under "API restrictions", select "Restrict key"
   - Choose "YouTube Data API v3"

## 📖 Usage

1. **Enter a Playlist URL**: Paste any public YouTube playlist URL into the input field
2. **Analyze**: Click the "Analyze Playlist" button
3. **View Results**: See comprehensive statistics including:
   - Playlist title and channel name
   - Total video count (including unavailable videos)
   - Average video length
   - Total playlist duration
   - Watch times at different playback speeds
4. **Custom Speed**: Enter any custom playback speed to calculate watch time

### Supported URL Formats

- `https://www.youtube.com/playlist?list=PLxxxxx`
- `https://youtube.com/playlist?list=PLxxxxx`
- `https://www.youtube.com/watch?v=xxxxx&list=PLxxxxx`

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **API**: YouTube Data API v3
- **Deployment**: [Vercel](https://vercel.com/) (recommended)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**: Ensure your code is in a GitHub repository
2. **Connect to Vercel**: 
   - Go to [vercel.com](https://vercel.com/)
   - Import your GitHub repository
3. **Add Environment Variables**:
   - In your Vercel project settings
   - Add `YOUTUBE_API_KEY` with your API key
4. **Deploy**: Vercel will automatically deploy your application

### Deploy to Other Platforms

The application can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- Render
- DigitalOcean App Platform

Make sure to set the `YOUTUBE_API_KEY` environment variable on your chosen platform.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes**
4. **Test thoroughly**: Ensure the app works on different devices and screen sizes
5. **Commit your changes**: `git commit -m 'Add some amazing feature'`
6. **Push to the branch**: `git push origin feature/amazing-feature`
7. **Open a Pull Request**

## 📝 API Usage & Quotas

- The YouTube Data API has a daily quota limit (10,000 units for free tier)
- Each playlist analysis uses quota based on the number of videos
- Large playlists (100+ videos) may consume significant quota
- Consider implementing caching for production use

## 🐛 Troubleshooting

### Common Issues

**"YouTube API key is not configured"**
- Ensure your `.env.local` file contains the correct API key
- Verify the API key is valid and has YouTube Data API v3 enabled

**"Playlist not found or is private"**
- Ensure the playlist URL is correct and the playlist is public
- Some playlists may be region-restricted

**Scrolling issues on mobile**
- Clear your browser cache
- Try refreshing the page after analysis

### Getting Help

- Check the [Issues](https://github.com/bijanmurmu/rapid-play/issues) page
- Create a new issue with detailed information about your problem
- Include browser version, device type, and steps to reproduce

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [YouTube Data API](https://developers.google.com/youtube/v3) for providing playlist data
- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components

---

**Made with ❤️ by [Bijan Murmu](https://github.com/bijanmurmu)**

⭐ Star this repository if you found it helpful!
\`\`\`
