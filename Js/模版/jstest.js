var rule={
title:'兰花影院',
host:'https://cucutube.com',
//host:'https://www.lanhua.tv',
url:'/vodshow/fyclass--------fypage---.html',
searchUrl:'/vodsearch/**----------fypage---.html',
searchable:2,
quickSearch:0,
filterable:0,
headers:{'User-Agent':'MOBILE_UA', },
class_name:'电影&电视剧&综艺&动漫&纪录片',
class_url:'1&2&3&4&5',
play_parse:true,
lazy:'',
limit:6,
    推荐:'ul.vodlist.vodlist_wi;li;a&&title;a&&data-original;.pic_text.text_right&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'li.vodlist_item;a&&title;a&&data-original;.pic_text.text_right&&Text;a&&href',
    二级:{"title":"h2&&Text;.content_detail.content_min.fl .data_style&&Text","img":".content_thumb .vodlist_thumb&&data-original","desc":".content_detail.content_min.fl li:eq(-8)&&Text;.content_detail.content_min.fl li:eq(-8)&&Text;.content_detail.content_min.fl li:eq(0)&&Text;.content_detail.content_min.fl li:eq(2)&&Text;.content_detail.content_min.fl li:eq(3)&&Text","content":".content&&Text","tabs":".play_source_tab:eq(0) a","lists":".content_playlist:eq(#id) li"},
    搜索:'body .searchlist_item;a&&title;.vodlist_thumb&&data-original;.pic_text.text_right&&Text;a&&href;.vodlist_sub&&Text',
}
