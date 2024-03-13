export const CommentListData = [
    {
        id: "1",
        img: "https://i.ibb.co/yV6fBfD/Screenshot-6.png",
        name: "amyrobson",
        time: "1month ago",
        comment: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
        likes: 12,
    },
    {
        id: "2",
        img: "https://i.ibb.co/ZK0nFkR/Screenshot-7.png",
        name: "maxblagun",
        time: "2 weeks ago",
        comment: "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
        likes: 5,
        replies: [
            {
                id: "r1",
                img: "https://i.ibb.co/jDpTSmG/Screenshot-8.png",
                name: "ramsesmiron",
                time: "1 week ago",
                comment: "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
                likes: 4,
                mention: "@maxblagun"
            },
            {
                id: "r2",
                img: "https://i.ibb.co/WcJXT6g/Screenshot-9.png",
                name: "juliusomo",
                time: "2 days ago",
                comment: "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/ framework. But the fundamentals are what stay constant.",
                likes: 4,
                mention: "@ramsesmiran"
            }
        ]
    }
]; 