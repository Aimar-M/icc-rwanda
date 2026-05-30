export interface Person {
  /** URL slug — must be unique. */
  slug: string
  name: string
  age: number
  focus: string
  location: string
  /** One-line teaser shown on the card. */
  story: string
  /** Full story shown on the individual profile page (array of paragraphs). */
  fullStory: string[]
  /** Optional headshot. When omitted, a placeholder portrait is shown. */
  photo?: string
}

// TODO(content): Replace placeholders with real participants — photo, name, age,
// focus/program, location, and their story. Names use Jane/John Doe intentionally.
// Each `slug` must stay unique (it's the page URL).
export const people: Person[] = [
  {
    slug: 'jane-doe-1',
    name: 'Jane Doe',
    age: 19,
    focus: 'Tailoring & Design',
    location: 'Kamonyi, Rwanda',
    story: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    fullStory: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      'Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
      'Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    ],
  },
  {
    slug: 'john-doe-1',
    name: 'John Doe',
    age: 22,
    focus: 'Information Technology',
    location: 'Arizona, USA',
    story: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
    fullStory: [
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ],
  },
  {
    slug: 'jane-doe-2',
    name: 'Jane Doe',
    age: 18,
    focus: 'Hospitality & Catering',
    location: 'Kamonyi, Rwanda',
    story: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.',
    fullStory: [
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ],
  },
  {
    slug: 'john-doe-2',
    name: 'John Doe',
    age: 24,
    focus: 'Small Business',
    location: 'Arizona, USA',
    story: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
    fullStory: [
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      'Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    ],
  },
  {
    slug: 'jane-doe-3',
    name: 'Jane Doe',
    age: 20,
    focus: 'Nursing & Care',
    location: 'Kamonyi, Rwanda',
    story: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    fullStory: [
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.',
      'Et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
      'Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    ],
  },
  {
    slug: 'john-doe-3',
    name: 'John Doe',
    age: 21,
    focus: 'Carpentry',
    location: 'Kamonyi, Rwanda',
    story: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.',
    fullStory: [
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
      'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.',
      'Ut labore et dolore magnam aliquam quaerat voluptatem.',
    ],
  },
]

export function getPerson(slug: string) {
  return people.find((p) => p.slug === slug)
}
