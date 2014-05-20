var content = [ "Home", "Current Issue", "Past Issues", "Topics", "CME", "Resources"];
var journalOptions = [ "Current Issue", "Past Issues", "Upcoming Articles"];
var articleOptions = [ "All Articles", "Current Article", "Archives"];
var topics = [ "Acne", "Skin Cancer", "Psoriasis", "Aging", "Cosmetics"];
var cme = ["CME Activities"];
var dermMatters = ["DermMatters Blog"];
var multimediaOptions = ["DermPearls", "Supplements"];
var resources = ["Buyer's Resource Guide", "Conference Calendar", "International Alliance", "Index Archives", "Issue Archives"];
var contact = ["Contact Us", "Feedback", "Reprint", "Advertising", "Submit an Article", "Letters to the Editor"];
var subscribeOptions = ["New Subscriber", "Renew Subscription", "Subscription Information", "Member Profile"];
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