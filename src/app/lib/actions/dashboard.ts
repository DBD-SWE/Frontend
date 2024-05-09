'use server';
import axios from '../api/axios';

export async function getDashboardData() {
  try {
    const response = await axios.get('/commodities/dashboard');
    const data = response.data;
    return {
      status: 'ok',
      data: {
        summaryCardsData: {
          districtsCount: data.districts_count,
          commoditiesCount: data.commodities_count,
          usersCount: data.users_count,
          attractionsCount: data.attractions_count,
          guestHousesCount: data.guest_houses_count,
        },
        pieChartData: data.districts_data,
        mapsData: data.commodities,
        recentActivities: data.recent_activities,
      },
    };
  } catch (error) {
    return {
      status: 'error',
      message: 'An error occurred while fetching data',
    };
  }
}

// {
//     districts_count: 0,
//     commodities_count: 0,
//     users_count: 3,
//     attractions_count: 0,
//     guest_houses_count: 0,
//     districts_data: [],
//     commodities: [],
//     recent_activities: [
//       {
//         id: 90,
//         actor: 1,
//         actor_ip: '127.0.0.1',
//         action_type: 'Read',
//         action_time: '2024-05-09T14:52:09.313653Z',
//         remarks: 'User: jean.paul.bassil@outlook.com -- Action Type: Read -- Path: /commodities/dashboard/ -- Path Name: dashboard',
//         status: 'Success',
//         content_type: null,
//         object_id: null,
//         content_object: null
//       },
//       {
//         id: 89,
//         actor: 1,
//         actor_ip: '127.0.0.1',
//         action_type: 'Read',
//         action_time: '2024-05-09T14:51:51.590250Z',
//         remarks: 'User: jean.paul.bassil@outlook.com -- Action Type: Read -- Path: /commodities/dashboard/ -- Path Name: dashboard',
//         status: 'Success',
//         content_type: null,
//         object_id: null,
//         content_object: null
//       },
//       {
//         id: 88,
//         actor: 1,
//         actor_ip: '127.0.0.1',
//         action_type: 'Read',
//         action_time: '2024-05-09T14:51:44.183561Z',
//         remarks: 'User: jean.paul.bassil@outlook.com -- Action Type: Read -- Path: /commodities/dashboard/ -- Path Name: dashboard',
//         status: 'Success',
//         content_type: null,
//         object_id: null,
//         content_object: null
//       },
//       {
//         id: 87,
//         actor: 1,
//         actor_ip: '127.0.0.1',
//         action_type: 'Read',
//         action_time: '2024-05-09T14:51:00.987324Z',
//         remarks: 'User: jean.paul.bassil@outlook.com -- Action Type: Read -- Path: /commodities/dashboard/ -- Path Name: dashboard',
//         status: 'Success',
//         content_type: null,
//         object_id: null,
//         content_object: null
//       },
//       {
//         id: 86,
//         actor: 1,
//         actor_ip: '127.0.0.1',
//         action_type: 'Read',
//         action_time: '2024-05-09T14:51:00.955824Z',
//         remarks: 'User: jean.paul.bassil@outlook.com -- Action Type: Read -- Path: /commodities/dashboard/ -- Path Name: dashboard',
//         status: 'Success',
//         content_type: null,
//         object_id: null,
//         content_object: null
//       }
//     ]
//   }
