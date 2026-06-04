# RAPID PLAY //

> **A Brutalist YouTube Playlist Analyzer & Watch Time Calculator**

Rapid Play is a lightning-fast, highly-optimized web tool built to analyze YouTube playlists and individual videos. It instantly calculates total duration, average video length, and exact watch times across different playback speeds.

Designed with a raw, high-contrast brutalist aesthetic, it cuts through the noise to deliver data immediately.

## 01. CORE FEATURES //

- **Instant Analysis**: Paste a YouTube playlist or video URL and receive comprehensive statistics immediately.
- **Playback Speed Calculation**: See exactly how long a playlist will take to complete at 1.25x, 1.5x, 1.75x, and 2.0x speeds.
- **Video Breakdown**: View a fully structured list of all videos in a playlist, complete with duration and high-contrast thumbnails.
- **Brutalist UI/UX**: A raw, unstyled aesthetic that prioritizes typography, extreme contrast, and pure data.
- **Responsive Architecture**: Fully optimized for both desktop and mobile terminals.

## 02. SYSTEM REQUIREMENTS //

- Node.js (v18 or higher recommended)
- npm, yarn, or pnpm
- YouTube Data API v3 Key

## 03. INITIALIZATION PROTOCOL //

1. **Clone the Repository**
   ```bash
   git clone https://github.com/bijanmurmu/Rapid-Play.git
   cd Rapid-Play
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env.local` file in the root directory and add your YouTube Data API Key:
   ```env
   YOUTUBE_API_KEY=your_api_key_here
   ```

4. **Launch Development Server**
   ```bash
   npm run dev
   ```
   *System will be accessible at http://localhost:3000*

## 04. TECHNOLOGY STACK //

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Lucide React
- **Data Source**: YouTube Data API v3

## 05. OPEN SOURCE & CONTRIBUTIONS //

Rapid Play is completely open-source. Contributions, issue reports, and feature requests are highly encouraged.
Please refer to the `CONTRIBUTING.md` file for guidelines on how to submit pull requests and code standards.

## 06. LICENSE & LEGAL //

This project is licensed under the MIT License. See the `LICENSE` file for full details.

For detailed terms of service and privacy policies, please refer to the `/terms` and `/privacy` routes within the application.

---
**[ END OF TRANSMISSION ]**
