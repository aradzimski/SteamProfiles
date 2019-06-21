export class GamesList{
    constructor() {}
        public game_count: number;
        public games: Array<Game>;
}

export class Game{
    constructor() {}
        public appid: number;
        public has_community_visible_stats: boolean;
        public img_icon_url: string;
        public img_logo_url: string;
        public name: string;
        public playtime_forever: number;
}