const igUserProfileRegularExpression=/window._sharedData = (.*);<\/script>/i,instaUserInfo=function(){};instaUserInfo.getUserProfile=function(e){"use strict";const{username:t,userId:o,updateStatusDiv:r,silent:n,vueStatus:s}=e;return new Promise((e,o)=>{u(t,e,o)});function i(e){return new Promise((t,o)=>{!function e(t,o,n){const i=`https://www.instagram.com/web/friendships/${t}/follow/`;axios.get(i,{},{}).then(e=>{const t=e.data.match(instaDefOptions.regFindUser);(t||[]).length>0?o(t[1]):o()},i=>{console.log(i);const a=i.response?i.response.status:0;if(console.log(`(getUsernameById) ${t} error code - ${a}`),instaDefOptions.httpErrorMap.hasOwnProperty(a)){const i=instaMessages.getMessage(instaDefOptions.httpErrorMap[a],a,+instaDefOptions.retryInterval/6e4);r(i,"red"),instaTimeout.setTimeout(3e3).then(()=>instaCountdown.doCountdown("status",a,"Resolving user id to username",+(new Date).getTime()+instaDefOptions.retryInterval,s)).then(()=>{console.log("Continue execution after HTTP error",a,new Date),e(t,o,n)})}else alert(`Error resolving ${t} to username/${a}`),n()})}(e,t,o)})}function a(e,t,r){const n=igUserProfileRegularExpression.exec(e);if(n){const s=JSON.parse(n[1]);if(s.entry_data.ProfilePage&&function(e){try{JSON.parse(JSON.stringify(e))}catch(e){return!1}return!0}(s.entry_data.ProfilePage[0].graphql.user)){let{id:e,username:t,full_name:o,profile_pic_url_hd:n,biography:i,connected_fb_page:a,external_url:l,followed_by_viewer:u,follows_viewer:_,is_private:f,has_requested_viewer:d,blocked_by_viewer:g,requested_by_viewer:c,has_blocked_viewer:w,is_verified:p,is_business_account:m,business_category_name:h,business_email:y,business_phone_number:b}=s.entry_data.ProfilePage[0].graphql.user;const v=s.entry_data.ProfilePage[0].graphql.user.edge_follow.count,P=s.entry_data.ProfilePage[0].graphql.user.edge_followed_by.count,D=s.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.count;let T;D>0&&s.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges[0]&&(T=new Date(1e3*s.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges[0].node.taken_at_timestamp)),u=c?null:u,_=d?null:_;const O={};Object.assign(O,{id:e,username:t,full_name:o,profile_pic_url_hd:n,biography:i,connected_fb_page:a,external_url:l,followed_by_viewer:u,follows_viewer:_,is_private:f,has_requested_viewer:d,blocked_by_viewer:g,requested_by_viewer:c,has_blocked_viewer:w,follows_count:v,followed_by_count:P,media_count:D,latestPostDate:T,is_verified:p,is_business_account:m,business_category_name:h,business_email:y,business_phone_number:b}),r(O)}else console.log(`returned data in getUserProfile is not JSON - ${o}/${t}`),console.log(e),r({username:instaDefOptions.you,full_name:"NA",biography:"The detailed user info was not returned by instagram (no-json)",is_private:!0,followed_by_viewer:!1,follows_viewer:!1,follows_count:0,followed_by_count:0,media_count:0})}else console.log(`exec failed in getUserProfile - ${o}/${t}`),console.log(e),r({username:instaDefOptions.you,full_name:"NA0",biography:"The detailed user info was not returned by instagram (exec)",is_private:!0,followed_by_viewer:!1,follows_viewer:!1,follows_count:0,followed_by_count:0,media_count:0})}function l(e,a,l){console.log(e);const _=e.response?e.response.status:0;if(_>0&&console.log(`error response data - ${e.response.data}/${_}`),console.log(`Error making http request to get user profile ${t}, status - ${_}`),404===_)console.log(">>>HTTP404 error getting the user profile.",t,new Date),o?(console.log(`>>>user id is defined - ${o}`),i(o).then(e=>{console.log(">>> resolved a new user name",o,e),e?u(e,a,l):a({username:instaDefOptions.you,full_name:"NA1",biography:"The detailed user info was not returned by instagram (content unavailable)",is_private:!0,followed_by_viewer:!1,follows_viewer:!1,follows_count:0,followed_by_count:0,media_count:0})}).catch(()=>{alert(`The error trying to find a new username for - ${o}`)})):(n||alert("404 error trying to retrieve user profile, userid is not specified, check if username is correct"),l());else if(instaDefOptions.httpErrorMap.hasOwnProperty(_)){console.log(`HTTP${_} error trying to get the user profile.`,new Date),function(e,o,n,i){"function"==typeof r?(r(e,"red"),instaTimeout.setTimeout(3e3).then(()=>instaCountdown.doCountdown("status",o,"Getting users profiles",+(new Date).getTime()+instaDefOptions.retryInterval,s)).then(()=>{console.log("Continue execution after HTTP error",o,new Date),u(t,n,i)})):(alert(`Error ${o} trying to get the detailed user info for ${t}. Please try again later`),i())}(instaMessages.getMessage(instaDefOptions.httpErrorMap[_],_,+instaDefOptions.retryInterval/6e4),_,a,l)}else alert(instaMessages.getMessage("ERRGETTINGUSER",t,_)),l()}function u(e,t,o){const r=`https://www.instagram.com/${e}/`;axios.get(r,{},{headers:{"x-instagram-ajax":1,eferer:"https://www.instagram.com/"}}).then(e=>{a(e.data,r,t)},e=>l(e,t,o))}};