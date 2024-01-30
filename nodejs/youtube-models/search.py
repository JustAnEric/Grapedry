from youtubesearchpython import VideosSearch
import sys,json

def correctSingleQuoteJSON(s):
    rstr = ""
    escaped = False

    for c in s:
    
        if c == "'" and not escaped:
            c = '"' # replace single with double quote
        
        elif c == "'" and escaped:
            rstr = rstr[:-1] # remove escape character before single quotes
        
        elif c == '"':
            c = '\\' + c # escape existing double quotes
   
        escaped = (c == "\\") # check for an escape character
        rstr += c # append the correct json
    
    return rstr

def change(string:str):
    return string.replace('None', 'null').replace('\\xa0','').replace('True','true').replace('False','false')


# imma edit the music styles ok
#{"result": [{"type": "video", "id": "3VJaJaa8Aco", "title": "Feint - Fading Wind [Monstercat Release]", "publishedTime": "2 years ago", "duration": "4:56", "viewCount": {"text": "974,153 views", "short": "974K views"}, "thumbnails": [{"url": "https://i.ytimg.com/vi/3VJaJaa8Aco/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBma7Cg7CkYJ7NNaIBOgI8lvAuNxQ", "width": 360, "height": 202}, {"url": "https://i.ytimg.com/vi/3VJaJaa8Aco/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA-dl-9lg_3qv8o-ZLQ_div0Yzi5w", "width": 720, "height": 404}], "richThumbnail": {"url": "https://i.ytimg.com/an_webp/3VJaJaa8Aco/mqdefault_6s.webp?du=3000&sqp=CO6Q3K0G&rs=AOn4CLDwWiTONF_AEDXxaM7y3jpPgkKJoQ", "width": 320, "height": 180}, "descriptionSnippet": [{"text": "Genre: #DrumandBass #Monstercat ▽ Sign up for the Monstercat Newsletter! https://monster.cat/newsletter ▽ Want some new\xa0..."}], "channel": {"name": "Monstercat Uncaged", "id": "UCJ6td3C9QlPO9O_J5dF4ZzA", "thumbnails": [{"url": "https://yt3.ggpht.com/Ph0mK5jezJ99mdmK73bQmUibmEIWMFJQR_ufljd28QwUZoGnX6diEdp0F2d7SqkeicuMmCcJh-o=s68-c-k-c0x00ffffff-no-rj", "width": 68, "height": 68}], "link": "https://www.youtube.com/channel/UCJ6td3C9QlPO9O_J5dF4ZzA"}, "accessibility": {"title": "Feint - Fading Wind [Monstercat Release] by Monstercat Uncaged 974,153 views 2 years ago 4 minutes, 56 seconds", "duration": "4 minutes, 56 seconds"}, "link": "https://www.youtube.com/watch?v=3VJaJaa8Aco", "shelfTitle": None}]}
#{"result": [{"type": "video", "id": "rEq1Z0bjdwc", "title": "Obi-Wan - \"Hello there.\"", "publishedTime": "8 years ago", "duration": "0:15", "viewCount": {"text": "8,338,016 views", "short": "8.3M views"}, "thumbnails": [{"url": "https://i.ytimg.com/vi/rEq1Z0bjdwc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBB07q63TpiuBejNL1SW5IfF0Q93Q", "width": 360, "height": 202}, {"url": "https://i.ytimg.com/vi/rEq1Z0bjdwc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBcaYUMCciYQWGbLGLHtCN_lmKIjQ", "width": 720, "height": 404}], "richThumbnail": {"url": "https://i.ytimg.com/an_webp/rEq1Z0bjdwc/mqdefault_6s.webp?du=3000&sqp=CJz0260G&rs=AOn4CLBQl4QI3Uv3cYeqDYUXAmLNUSUiOA", "width": 320, "height": 180}, "descriptionSnippet": [{"text": "Obi-Wan says "}, {"text": "hi", "bold": True}, {"text": " to everybody. Star Wars: Revenge of the Sith is owned by Lucasfilm. No copyright infringement intended."}], "channel": {"name": "Short Clips", "id": "UCFZ1dO0j7fmX5P1OoDRGMjg", "thumbnails": [{"url": "https://yt3.ggpht.com/ytc/AIf8zZTab5GOM06FiW3FCuxD-LMVArWCIj7I3aptRX_woA=s68-c-k-c0x00ffffff-no-rj", "width": 68, "height": 68}], "link": "https://www.youtube.com/channel/UCFZ1dO0j7fmX5P1OoDRGMjg"}, "accessibility": {"title": "Obi-Wan - \"Hello there.\" by Short Clips 8,338,016 views 8 years ago 15 seconds", "duration": "15 seconds"}, "link": "https://www.youtube.com/watch?v=rEq1Z0bjdwc", "shelfTitle": None}]}

if sys.argv[1]:
    videosSearch = VideosSearch(json.loads(sys.argv[1])['query'], limit = 1)
    #print(correctSingleQuoteJSON(change(str(videosSearch.result()['result']))))
    data = json.dumps(
        videosSearch.result()['result']
    )
    print(
        data
    )
    #print(json.dumps(correctSingleQuoteJSON(change(str(videosSearch.result()['result'])))))
