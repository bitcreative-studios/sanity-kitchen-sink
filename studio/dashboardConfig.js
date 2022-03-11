export default {
  widgets: [
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
                  buildHookId: '622bdf723d315709ca744418',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-rn4woe25',
                  apiId: 'fd259785-044d-4be7-80fc-496a9acf2d08'
                },
                {
                  buildHookId: '622bdf726a253d0d7776cab5',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-kfu26rxs',
                  apiId: 'f1bacbdd-3e8c-4084-bd0d-bb353fb61ac8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bitwhys/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-kfu26rxs.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
