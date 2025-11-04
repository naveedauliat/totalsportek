import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Using NewsAPI for sports news (you'll need to sign up for a free API key)
    const NEWS_API_KEY = process.env.NEWS_API_KEY || 'demo'; // Replace with actual API key
    const response = await axios.get(`https://newsapi.org/v2/everything?q=sports&apiKey=${NEWS_API_KEY}&pageSize=10&sortBy=publishedAt`);

    const news = response.data.articles.map(article => ({
      id: article.url,
      title: article.title,
      description: article.description,
      url: article.url,
      source: article.source.name,
      publishedAt: article.publishedAt,
      imageUrl: article.urlToImage
    }));

    return NextResponse.json(news);
  } catch (error) {
    console.error('Error fetching news:', error);
    // Return mock data if API fails
    const mockNews = [
      {
        id: '1',
        title: 'Championship Finals Preview: Teams Battle for Glory',
        description: 'The biggest sporting event of the year kicks off with intense rivalries and high stakes.',
        url: '#',
        source: 'Sports Central',
        publishedAt: new Date().toISOString(),
        imageUrl: null
      },
      {
        id: '2',
        title: 'Record-Breaking Performance Shatters Expectations',
        description: 'Athletes push boundaries with unprecedented achievements in multiple disciplines.',
        url: '#',
        source: 'Athletic News',
        publishedAt: new Date().toISOString(),
        imageUrl: null
      },
      {
        id: '3',
        title: 'Olympic Qualifiers Heat Up Competition',
        description: 'Countries intensify preparations as qualification rounds reach critical stages.',
        url: '#',
        source: 'Olympic Update',
        publishedAt: new Date().toISOString(),
        imageUrl: null
      }
    ];
    return NextResponse.json(mockNews);
  }
}
