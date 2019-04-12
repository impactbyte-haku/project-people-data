const people = [
  {
    name: 'Christophorus Bintang Saputra',
    email: 'bintangcbs26@gmail.com',
    phone: '+6282136912853',
    age: 23,
    hobbies: ['maen musik', 'apa ya']
  },
  {
    name: 'Darlyn Robby Artanto',
    email: 'emaildarlyn@gmail.com',
    phone: '+6285214881321',
    age: 32,
    hobbies: ['membaca', 'itu aja']
  },
  {
    name: 'Dicky Muhamad Rizky',
    email: 'dickymr.dev@gmail.com',
    phone: '+6287870505005',
    age: 23,
    hobbies: ['mancing ikan lah', 'udah itu aja', 'sip']
  },
  {
    name: 'Herdanu Yudistira',
    email: 'danu@impactbyte.com',
    phone: '+62 852 3040 0050',
    age: 26,
    hobbies: ['tidur', 'ngayal', 'momong anak beberapa tahun yang lalu']
  },
  {
    name: 'M Haidar Hanif',
    email: 'haidar@impactbyte.com',
    phone: '+62 8 1993 101010',
    age: 25,
    hobbies: ['ngelawak', 'ngoding', 'ngemil']
  },
  {
    name: 'Muhammad Riza',
    email: 'riza.riza69@gmail.com',
    phone: '+628119780702',
    age: 32,
    hobbies: ['jalan-jalan bareng keluarga']
  },
  {
    name: 'Nanda Christanto',
    email: 'christanto.nanda@gmail.com',
    phone: '+6281218945920',
    age: 27,
    hobbies: ['travel', 'hiking']
  },
  {
    name: 'Raga Subekti',
    email: 'ragasubekti@gmail.com',
    phone: '+6282143688959',
    age: 20,
    hobbies: ['tidur', 'makan', 'ngemil', 'ngopi', 'udah']
  },
  {
    name: 'Rohmad Arifin',
    email: 'rohmadarifin007@gmail.com',
    phone: '+6281318414457',
    age: 25,
    hobbies: ['ngakak', 'ngapak', 'ngopi', 'udah']
  },
  {
    name: 'Sarah Julia Gushef',
    email: 'sarahgushef@gmail.com',
    phone: '+62-812-82318880',
    age: 23,
    hobbies: ['zikir', 'nyinyir', 'jadi netizen']
  },
  {
    name: 'Yan France Mumu',
    email: 'yanfrance.mumu@gmail.com',
    phone: '+62 82248077976',
    age: 31,
    hobbies: ['baca', 'ngemil', 'mikirin negara']
  },
  {
    name: 'Yevgeny Omar Siregar',
    email: 'siregar.yevgeny@gmail.com',
    phone: '+62 81316596856',
    age: 19,
    hobbies: ['hiking', 'baca', 'mikir']
  },
  {
    name: 'Zein Hammad Marhabah',
    email: 'zeinmrhb@gmail.com',
    phone: '+6283875933275',
    age: 20,
    hobbies: ['dulu maen dota sih', 'dah']
  },
  {
    name: 'Maher Zain',
    email: 'maher@zain.com',
    phone: '+46 464646464646',
    age: 37,
    hobbies: ['Singing', 'Acting']
  }
]

const filterWithHobby = hobby => {
  const result = people
    .map(person => {
      return person
    })
    .filter(person => {
      return person.hobbies.includes(hobby)
    })

  return result
}

const showPeople = people => {
  people.forEach(person => {
    console.log(person.name)
  })
}

const alertPeople = people => {
  people.forEach(person => {
    alert(person.name)
  })
}

const hobbyInput = prompt('Enter a "hobby name" to find who has what hobby:')

const filteredPeople = filterWithHobby(hobbyInput)

alertPeople(filteredPeople)
