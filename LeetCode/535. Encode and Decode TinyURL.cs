public class Codec {

    // Encodes a URL to a shortened URL
    public string encode(string longUrl) {
        
        var encoded = new StringBuilder();
        
        foreach(char c in longUrl){
            encoded.Append((char)(c-20));
        }
        
        return encoded.ToString();
        
    }

    // Decodes a shortened URL to its original URL.
    public string decode(string shortUrl) {
        
        var decoded = new StringBuilder();
        
        foreach(char c in shortUrl){
            decoded.Append((char)(c+20));
        }
        
        return decoded.ToString();
    }
}