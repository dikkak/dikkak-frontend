import ChannelService from "./channelTalk";
export const setChannelTalkUser = (
  email: string,
  username: string,
  type: string
) => {
  ChannelService.boot({
    pluginKey: process.env.REACT_APP_CHANNELTALK_PLUGIN_KEY, //please fill with your plugin key
    memberId: email, //fill with user id
    profile: {
      name: username, //fill with user name
      email,
      type,
    },
  });
};

// ChannelService.boot({
//   pluginKey: "YOUR_PLUGIN_KEY", //please fill with your plugin key
//   memberId: "YOUR_USER_ID", //fill with user id
//   profile: {
//     name: "YOUR_USER_NAME", //fill with user name
//     mobileNumber: "YOUR_USER_MOBILE_NUMBER", //fill with user phone number
//     CUSTOM_VALUE_1: "VALUE_1", //any other custom meta data
//     CUSTOM_VALUE_2: "VALUE_2",
//   },
// });
