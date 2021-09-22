// Config your info here
export default {
    author: 'haoran',
    email: 'haoran.mc@outlook.com',
    github: 'haoran-mc',
    // 指定卡片风格页面
    // 当 `activeAll` 为 `true` 时，所有页面激活卡片风格
    // 另外，当你的文件名以 `*-card.org` 这样的格式结尾时，也会激活卡片风格
    card: {
        activeAll: false,
        pages: [
            'idea',
            'diary',
            'joker',
            'gtd',
            'story',
            'wiki',
            'web-developer-roadmap',
        ],
    },
    // 加密的页面
    encrypt: {
        password: '123456',
        // 你的私有页面
        pages: ['foo', 'bar'],
    }
};
