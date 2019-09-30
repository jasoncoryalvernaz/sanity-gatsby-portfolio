export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5d92853ceb5404e00f8df09f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-jgbvwr62',
                  apiId: '6575de4a-d754-49d4-9115-a731872d4a66'
                },
                {
                  buildHookId: '5d92853c6aafb5b8360dc214',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-xq4ong7a',
                  apiId: '040ac6b7-351a-42f0-b878-bd6eb54455ae'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jasoncoryalvernaz/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-xq4ong7a.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
