export interface Episode {
  id: string
  title: string
  category: 'management' | 'marketing'
  number: number
  url: string
}

export const episodes: Episode[] = [
  {
    id: 'management-1',
    title: 'Management 1',
    category: 'management',
    number: 1,
    url: '/episodes/Managment1.mp3'
  },
  {
    id: 'management-2',
    title: 'Management 2',
    category: 'management',
    number: 2,
    url: '/episodes/Managment2.mp3'
  },
  {
    id: 'management-3',
    title: 'Management 3',
    category: 'management',
    number: 3,
    url: '/episodes/Managment3.mp3'
  },
  {
    id: 'management-4',
    title: 'Management 4',
    category: 'management',
    number: 4,
    url: '/episodes/Managment4.mp3'
  },
  {
    id: 'management-5',
    title: 'Management 5',
    category: 'management',
    number: 5,
    url: '/episodes/Managment5.mp3'
  },
  {
    id: 'management-6',
    title: 'Management 6',
    category: 'management',
    number: 6,
    url: '/episodes/Managment6.mp3'
  },
  {
    id: 'marketing-1',
    title: 'Marketing 1',
    category: 'marketing',
    number: 1,
    url: '/episodes/Marketing1.mp3'
  },
  {
    id: 'marketing-2',
    title: 'Marketing 2',
    category: 'marketing',
    number: 2,
    url: '/episodes/Marketing2.mp3'
  },
  {
    id: 'marketing-3',
    title: 'Marketing 3',
    category: 'marketing',
    number: 3,
    url: '/episodes/Marketing3.mp3'
  },
  {
    id: 'marketing-4',
    title: 'Marketing 4',
    category: 'marketing',
    number: 4,
    url: '/episodes/Marketing4.mp3'
  },
  {
    id: 'marketing-5',
    title: 'Marketing 5',
    category: 'marketing',
    number: 5,
    url: '/episodes/Marketing5.mp3'
  },
  {
    id: 'marketing-6',
    title: 'Marketing 6',
    category: 'marketing',
    number: 6,
    url: '/episodes/Marketing6.mp3'
  }
]