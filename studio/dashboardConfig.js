export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e0613612799fc9505d448e7',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-nj1wrr1k',
                  apiId: '5e0bdba6-dce8-4f4c-9551-9030349fee1f'
                },
                {
                  buildHookId: '5e061361c926f7f9839a471b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-nj7fta4z',
                  apiId: '1bad2014-a546-4dc3-b8b0-de3dd984853c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lhcbernardes/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-nj7fta4z.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
