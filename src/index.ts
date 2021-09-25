interface Website {
    url: string;
}

interface Article {
    title: string;
    content: string;
}
//extends ได้มากกว่า 1 interface
interface BlogPost extends Website, Article {
    views: number;
}

const post: BlogPost = {
    url: 'www.facebook.com',
    title: 'Developer',
    content: 'My Life',
    views: 200
}