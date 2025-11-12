export const categories = [
    {
        id: 'fiction',
        title: 'Художественная литература',
        slug: 'fiction',
        children: [
            { id: 'foreign', title: 'Зарубежная литература', slug: 'foreign' },
            { id: 'russian', title: 'Российская литература', slug: 'russian' },
            { id: 'modern', title: 'Современная проза', slug: 'modern' },
            { id: 'fantasy', title: 'Фэнтези', slug: 'fantasy' },
            { id: 'detective', title: 'Детективы', slug: 'detective' },
            { id: 'classics', title: 'Классическая литература', slug: 'classics' },
            { id: 'poetry', title: 'Поэзия', slug: 'poetry' },
        ],
    },
    {
        id: 'childrens',
        title: 'Детская литература',
        slug: 'childrens',
        children: [
            { id: 'fairy-tales', title: 'Сказки', slug: 'fairy-tales' },
            { id: 'learning', title: 'Обучающая литература', slug: 'learning' },
            { id: 'school', title: 'Школьная программа', slug: 'school' },
        ],
    },
    {
        id: 'nonfiction',
        title: 'Нон-фикшн',
        slug: 'nonfiction',
        children: [
            { id: 'psychology', title: 'Психология', slug: 'psychology' },
            { id: 'selfdev', title: 'Саморазвитие', slug: 'selfdev' },
            { id: 'business', title: 'Бизнес и экономика', slug: 'business' },
            { id: 'history', title: 'История', slug: 'history' },
            { id: 'science', title: 'Наука и образование', slug: 'science' },
        ],
    },
    {
        id: 'comics',
        title: 'Комиксы и манга',
        slug: 'comics',
        children: [
            { id: 'manga', title: 'Манга', slug: 'manga' },
            { id: 'graphic', title: 'Графические романы', slug: 'graphic' },
        ],
    },
    {
        id: 'art',
        title: 'Искусство и культура',
        slug: 'art',
        children: [
            { id: 'art-books', title: 'Искусство', slug: 'art-books' },
            { id: 'music', title: 'Музыка', slug: 'music' },
            { id: 'cinema', title: 'Кино', slug: 'cinema' },
        ],
    },
    {
        id: 'foreign-languages',
        title: 'Книги на иностранных языках',
        slug: 'foreign-languages',
        children: [
            { id: 'english', title: 'На английском', slug: 'english' },
            { id: 'french', title: 'На французском', slug: 'french' },
            { id: 'german', title: 'На немецком', slug: 'german' },
        ],
    },
];
