var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/edenadler/6.C85-data-visualization-final-project.git',
    },
    () => {
        console.log('Deploy Complete!')
    }
)