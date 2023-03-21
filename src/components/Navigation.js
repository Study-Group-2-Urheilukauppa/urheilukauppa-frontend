

export default function Navigation() {

const navigation = {

    categories: [
      {
        id: 'talviurheilu',
        name: 'Talviurheilu',
        featured: [
          {
            name: 'Lumilaudat',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          {
            name: 'Sukset',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
        ],
        sections: [
          {
            id: 'talviurheilu',
            name: 'Talviurheilu',
            items: [
              { name: 'Lumilaudat', href: '#' },
              { name: 'Sukset', href: '#' },
              { name: 'Luistimet', href: '#' },
            ],
          },
        ],
      },
      {
        id: 'mailapelit',
        name: 'Mailapelit',
        featured: [
          {
            name: 'Jääkiekko',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Tennis',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
        ],
        sections: [
          {
            id: 'mailapelit',
            name: 'Mailapelit',
            items: [
              { name: 'Jääkiekko', href: '#' },
              { name: 'Tennis', href: '#' },
              { name: 'Pesäpallo', href: '#' },
              { name: 'Golf', href: '#' },
            ],
          },
        ],
      },
  
      {
        id: 'vesiurheilu',
        name: 'Vesiurheilu',
        featured: [
          {
            name: 'Vesisukset',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Uimalasit',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
        ],
        sections: [
          {
            id: 'vesiurheilu',
            name: 'Vesiurheilu',
            items: [
              { name: 'Vesisukset', href: '#' },
              { name: 'Vesijuoksu', href: '#' },
              { name: 'Räpylät', href: '#' },
              { name: 'Uimalasit', href: '#' },
              { name: 'Snorkkelit', href: '#' },
              { name: 'SUP-laudat', href: '#' },
            ],
          },
        ],
      },
  
      {
        id: 'pyoraily',
        name: 'Pyöräily',
        featured: [
          {
            name: 'Maastopyörät',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Maantiepyörät',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
        ],
        sections: [
          {
            id: 'pyoraily',
            name: 'Pyöräily',
            items: [
              { name: 'Maastopyörät', href: '#' },
              { name: 'Maantiepyörät', href: '#' },
              { name: 'Hybridit', href: '#' },
              { name: 'Lasten pyörät', href: '#' },
            ],
          },
        ],
      },
  
      {
        id: 'kuntoilu',
        name: 'Kuntoilu',
        featured: [
          {
            name: 'Käsipainot',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Kuntopyörät',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
        ],
        sections: [
          {
            id: 'kuntoilu',
            name: 'Kuntoilu',
            items: [
              { name: 'Käsipainot', href: '#' },
              { name: 'Kuntopyörät', href: '#' },
              { name: 'Juoksumatot', href: '#' },
              { name: 'Kahvakuulat', href: '#' },
            ],
          },
        ],
      },
  
    ],
    pages: [
      { name: 'Yrityksemme', href: '#' },
      { name: 'Asiakaspalvelu', href: '#' },
    ],
  }
}