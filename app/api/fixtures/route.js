import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Using AllSportsAPI for comprehensive sports fixtures
    const API_KEY = process.env.ALLSPORTS_API_KEY || 'abffff213b6eb76fff1012bd481305f26f3761736f7b1d49d677781b6c56da9b'; // AllSportsAPI key
    const response = await axios.get(`https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=${API_KEY}&from=2024-01-01&to=2024-12-31&leagueId=152`);

    const fixtures = response.data.result ? response.data.result.slice(0, 10).map(match => ({
      id: match.event_key,
      homeTeam: match.event_home_team,
      awayTeam: match.event_away_team,
      competition: match.league_name,
      date: match.event_date + ' ' + match.event_time,
      status: match.event_status,
      score: match.event_final_result ? match.event_final_result : null
    })) : [];

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
