class Youtube{
    constructor(httpClient){
        this.youtube = httpClient;
    }

    async mostPopular(){
      const response = await this.youtube.get('video',{
        params:{
          part: 'snippet',
          char : 'mostPopular',
          maxResults: 20,
        }
      });
      return response.items.map((item) => ({...item, key:item.id.videoId}));
    }

    async search(query){
      const response = await this.youtube.get('search',{
        params:{
          part: 'snippet',
          chart: 'mostPopular',
          maxResults: 20,
          q: query
        }
      });
        return response.items.map((item)=>({...item, key:item.id.videoId}));
    }

}

export default Youtube;