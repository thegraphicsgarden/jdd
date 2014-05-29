var content = [ 
  {text: "Home", link: "/"}, 
  {text: "Current Issue", link: "/"}, 
  {text: "Past Issues", link: "/"}, 
  {text: "Topics", link: "/"}, 
  {text: "CME", link: "/"}, 
  {text: "Resources", link: "/"}
];
var journalOptions = [ 
  {text: "Current Issue", link: "/"}, 
  {text: "Past Issues", link: "/"}, 
  {text: "Upcoming Articles", link: "/"}
];
var articleOptions = [ 
  {text: "All Articles", link: "/search/all-articles"}, 
  {text: "Current Article", link: "/article"}, 
  {text: "Archives", link: "/article"}
];
var topics = [ 
  {text: "Acne", link: "/search/Acne"},
  {text: "Skin Cancer", link: "/search/Skin-Cancer"}, 
  {text: "Psoriasis", link: "/search/Psoriasis"}, 
  {text: "Aging", link: "/search/Aging"}, 
  {text: "Cosmetics", link: "/search/Cosmetics"}, 
];
var cme = [
  {text: "CME Activities", link: "/"}
];
var dermMatters = [
  {text: "DermMatters Blog", link: "/"}
];
var multimediaOptions = [
  {text: "DermPearls", link: "/"},
  {text: "Supplements", link: "/"}
];
var resources = [ 
  {text: "Buyer's Resource Guide", link: "/"},
  {text: "Conference Calendar", link: "/"},
  {text: "International Alliance", link: "/"},
  {text: "Index Archives", link: "/"},
  {text: "Issue Archives", link: "/"}
];
var contact = [
  {text: "Contact Us", link: "/contact"},
  {text: "Feedback", link: "/feedback"},
  {text: "Reprint", link: "/"},
  {text: "Advertising", link: "/"},
  {text: "Submit an Article", link: "/"},
  {text: "Letters to the Editor", link: "/"}
];
var subscribeOptions = [
  {text: "New Subscriber", link: "/"},
  {text: "Renew Subscription", link: "/"},
  {text: "Subscription Information", link: "/"},
  {text: "Member Profile", link: "/"}
];
Template.footer.helpers({
  content: content,
  journalOptions: journalOptions,
  articleOptions: articleOptions,
  topics: topics,
  cme: cme,
  dermMatters: dermMatters,
  multimediaOptions: multimediaOptions,
  resources: resources,
  contact: contact,
  subscribeOptions: subscribeOptions
});