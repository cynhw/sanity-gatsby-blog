export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e90231a9dcf9114a25e6da6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-x1pz5dys',
                  apiId: '24eb8b83-3655-4eb5-8512-8c4516aed31e'
                },
                {
                  buildHookId: '5e90231a46f201f9f246d34e',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-mxcj2a6x',
                  apiId: '5ebdc7b3-1df1-4317-899c-50f11ce31181'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cynhw/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-mxcj2a6x.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
