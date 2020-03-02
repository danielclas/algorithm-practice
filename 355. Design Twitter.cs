 public class Twitter
    {

        Dictionary<int, List<int>> follows;
        Dictionary<int, List<KeyValuePair<int, DateTime>>> tweets;

        /** Initialize your data structure here. */
        public Twitter()
        {
            follows = new Dictionary<int, List<int>>();
            tweets = new Dictionary<int, List<KeyValuePair<int, DateTime>>>();
        }

        /** Compose a new tweet. */
        public void PostTweet(int userId, int tweetId)
        {
            if (!tweets.ContainsKey(userId))
            {
                tweets.Add(userId, null);
                tweets[userId] = new List<KeyValuePair<int, DateTime>>();
            }
            tweets[userId].Add(new KeyValuePair<int, DateTime>(tweetId, DateTime.Now));

        }

        /** Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. */
        public IList<int> GetNewsFeed(int userId)
        {

            List<KeyValuePair<int, DateTime>> feed = new List<KeyValuePair<int, DateTime>>();
            List<int> users = new List<int>();
            List<int> tw = new List<int>();
            int i = 0;

            if (follows.ContainsKey(userId))
            {
                foreach (int id in follows[userId])
                {
                    users.Add(id);
                }
            }

            if(!users.Contains(userId)){
                users.Add(userId);
            }

            foreach (int id in users)
            {
                if (tweets.ContainsKey(id))
                {
                    foreach (var t in tweets[id])
                    {
                        feed.Add(t);
                    }
                }
            }

            foreach (var item in feed.OrderByDescending(x => x.Value))
            {
                if (i == 10)
                {
                    break;
                }
                tw.Add(item.Key);
                i++;
            }

            return tw;

        }

        /** Follower follows a followee. If the operation is invalid, it should be a no-op. */
        public void Follow(int followerId, int followeeId)
        {
            if (!follows.ContainsKey(followerId))
            {
                follows.Add(followerId, new List<int>());
            }
            
            if(!follows[followerId].Contains(followeeId)){
                follows[followerId].Add(followeeId);
            }            
        }

        /** Follower unfollows a followee. If the operation is invalid, it should be a no-op. */
        public void Unfollow(int followerId, int followeeId)
        {
            if (follows.ContainsKey(followerId))
            {
                if (follows[followerId].Contains(followeeId))
                {
                    follows[followerId].Remove(followeeId);
                }
            }
        }
    }