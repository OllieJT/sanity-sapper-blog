export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5eb47f04c356e4c900b9ff65',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-7sdq2ybp',
                  apiId: 'cf0e4a2d-fd2c-46f5-acf5-d4070781ff60'
                },
                {
                  buildHookId: '5eb47f04b8216d0ca6f0e3cf',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-ioavf18i',
                  apiId: '08d6882f-d0d0-4f38-87e0-b15e1b240047'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/OllieJT/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-ioavf18i.netlify.app', category: 'apps'}
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
