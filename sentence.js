let sentenceBuilder = {
    subject: "I",
    verb: "am",
    object: "coding",
    
    buildSentence: function() {
      return (this.subject && this.verb && this.object) 
        ? this.subject + " " + this.verb + " " + this.object 
        : "Incomplete sentence";
    },
  
    updateProperty: function(property, value) {
      if (this.hasOwnProperty(property)) {
        this[property] = value;
      } else {
        return "Invalid property";
      }
    }
  };
  
  // Example usage:
  console.log(sentenceBuilder.buildSentence());  // "I am coding"
  sentenceBuilder.updateProperty("verb", "am learning");
  console.log(sentenceBuilder.buildSentence());  // "I am learning coding"
  sentenceBuilder.updateProperty("subject", "The cat");
  console.log(sentenceBuilder.buildSentence());  // "The cat am learning coding"
  sentenceBuilder.updateProperty("mood", "happy");
  console.log(sentenceBuilder.updateProperty("mood", "happy"));  // "Invalid property"
  sentenceBuilder.updateProperty("verb", "");
  console.log(sentenceBuilder.buildSentence());  // "Incomplete sentence"
  