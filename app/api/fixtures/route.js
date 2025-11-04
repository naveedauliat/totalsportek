import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Using a free football API (you can replace with other sports APIs)
    const API_KEY = process.env.FOOTBALL_API_KEY || 'f0a4cc827c054747bfabdc139e3b8277'; // Replace with actual API key
    const response = await axios.get(`https://api.football-data.org/v4/matches`, {
      headers: {
        'X-Auth-Token': API_KEY
      }
    });

    const fixtures = response.data.matches.slice(0, 10).map(match => ({
      id: match.id,
      homeTeam: match.homeTeam.name,
      awayTeam: match.awayTeam.name,
      competition: match.competition.name,
      date: match.utcDate,
      status: match.status,
      score: match.score ? `${match.score.fullTime.home} - ${match.score.fullTime.away}` : null
    }));

    return NextResponse.json(fixtures);
  } catch (error) {
    console.error('Error fetching fixtures:', error);
    // Return mock fixtures if API fails
    const mockFixtures = [
      {
        id: '1',
        homeTeam: 'Manchester United',
        awayTeam: 'Liverpool',
        competition: 'Premier League',
        date: new Date(Date.now() + 86400000).toISOString(), // Tomorrow
        status: 'SCHEDULED',
        score: null
      },
      {
        id: '2',
        homeTeam: 'Barcelona',
        awayTeam: 'Real Madrid',
        competition: 'La Liga',
        date: new Date(Date.now() + 172800000).toISOString(), // Day after tomorrow
        status: 'SCHEDULED',
        score: null
      },
      {
        id: '3',
        homeTeam: 'Bayern Munich',
        awayTeam: 'Borussia Dortmund',
        competition: 'Bundesliga',
        date: new Date(Date.now() + 259200000).toISOString(), // 3 days from now
        status: 'SCHEDULED',
        score: null
      },
      {
        id: '4',
        homeTeam: 'Juventus',
        awayTeam: 'AC Milan',
        competition: 'Serie A',
        date: new Date(Date.now() + 345600000).toISOString(), // 4 days from now
        status: 'SCHEDULED',
        score: null
      },
      {
        id: '5',
        homeTeam: 'PSG',
        awayTeam: 'Marseille',
        competition: 'Ligue 1',
        date: new Date(Date.now() + 432000000).toISOString(), // 5 days from now
        status: 'SCHEDULED',
        score: null
      }
    ];
    return NextResponse.json(mockFixtures);
  }
}
