(function(angular){
    "use strict";
    
var michelleApp = angular.module('michelleApp',['ui.router']);
    
michelleApp.config(function($stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise('home');
    
    $stateProvider
        
        //HOME STATES AND NESTED VIEWS =================
        
        .state('home',{
            url: '/home',
            templateUrl: 'app/views/home/home.html'
        })
    
        .state('about', {
            url: '/about',
            templateUrl: 'app/views/about/about.html'
        })
});
    
        // DIRECTIVES ===================================
    
michelleApp.directive('contact', function(){
    return {
        restrict: 'EAC',
        templateUrl: 'app/views/includes/contact.html'
    }
});
    
michelleApp.controller('testimonialController',['$scope',function($scope){
    $scope.testimonials = [
        {
            id: '01',
            client: 'Steve Bass',
            comment: ['Michelle’s personal reading of my ex was like being in the room with him. The cadence, the topics he brought up, his eratic communication style – they all added up to a remarkable experience. It was not only contacting him, it was like speaking to him again. So much more than I ever expected!','Michelle powerhouse energy and clarity juggled the expectations of 20 anxious guests and even more anxious spirits that wanted to be heard. She is a master, truly gifted and a fireball!']
        },
        {
            id: '02',
            client: 'Tracy Morgan',
            comment: ['I wanted to share some of the things you talked about in our first and second readings that make sense now. In the first shortly after Raymond passed you saw a red bird. We went home and I noticed a Red Robin on our shower curtain. After that they were everywhere decoratively. We noticed some on my husbands handmade picture his mom gave him, we got a few during that first Christmas, etc. On our last reading a few weeks ago you asked if we were taking baby to the snow. We did not anticipate it; however, while I was visiting Georgia, it snowed!!! Totally unexpected. And a Red Robin made himself known. I am sending you pics...you are welcome to share our story if you would like.I always feel good when I receive validation from clients and I feel it is Spirits way of saying, "Enjoy the gift..."']
            
        },
        {
            id: '03',
            client: 'Pamela V.',
            comment: ['The mystery of spirit connection is so intriguing and Michelle, your honest style set the tone for an illuminating evening. I can only imagine the pressure of ten sets of testing eyes as they look upon you for a life altering message, you handled it so gracefully. You are personal and tender in your readings and tried genuinely to connect to all who attended. As you know, the spirits choreograph so much and must also be thankful for people like you who dedicate themselves to helping souls living and passed to evolve to higher levels.']
        },
        {
            id: '04',
            client: 'Shannon H.',
            comment: ['Michelle is Amazing, she has an extremely special GIFT not a talent, a GIFT. A priceless Gift, it helps people heal, live again….THANK YOU MICHELLE!']
        },
        {
            id: '05',
            client: 'Brenda F.',
            comment: ['Michelle is an amazing medium. Her connections to spirits on the other side are spot on and amazing. She shared information with me that no one would know. She even named the person she was communicating with! The message she shared with me brought such peace and comfort...it was so very personal. I have been a different person since my reading with Michelle. She IS the real deal. Bless you sweet Michelle...and thank you for all that you do for us.']
        },
        {
            id: '06',
            client: 'Julie S.',
            comment: ['The reading you gave me during your group reading was amazing. You got in contact with my dear cousin that I miss. He was too young to die, but the message you gave me was so wonderful because it reminds me why I like working with kids. You also reached my loving Daddy that I miss everyday and think of so often. I miss him so much, it was so emotional to get a message from him. The message you gave me was a wonderful reminder that he is always with me and watches me. It is nice to know I can still make him proud and that I am still doing my best.']
        },
        {
            id: '07',
            client: 'Dee H.',
            comment: ['If you are up against the wall, confused, and don not know where to turn, Michelle can help you answer some of the questions to help get you back on track! My mother and I had an amazing , life changing reading from Michelle just a few nights ago and this experience was something I will never forget!']
            
        },
        {
            id: '08',
            client: 'Chloe Tatro',
            comment: ['Michelle has a beautiful, humbling, incredibly REAL gift as a medium between this world and the one beyond. She handled our groups readings with grace, compassion and even humor when the situation called for it. Accurate, patient and easy to converse with, Michelle used her special gift to give me one more precious than any other ... the opportunity to hear from my beloved grandmothers, who offered their much-needed love and support from the "other" side. A priceless gift I will cherish for the rest of my days."']
        },
        {
            id: '09',
            client: 'Debbie T.',
            comment: ['I had the Wonderful Pleasure of having a Reading done by Michelle, Before I even had a chance to tell her what it was I was seeking out, she had already started to tell me. I can not say Enough, as far as the "Gift" she has, and she made me more comfortable then I think she Realized. She gave me Much Needed Validation, that I had been seeking for a few years now. I truly Recommend her, for her ability to give "Accurate Readings." Michelle, Thank you... for bringing "The Peace" to me after a few Years of seeking, to my Heart, Body, and Soul. You Rock my Friend.']
        },
        {
            id: '10',
            client: 'Val M.',
            comment: ['To those considering seeing Michelle, I highly recommend you do. Think about the people you miss before going, and don’t be afraid to bring your older children if they want to participate. Be open to whatever you may hear, and definitely record your session for review later on. She’s a wonderful person with an amazing gift that I hope will bring peace, piece of mind, and reassurance to others.']
        }
    ]
}]);
    
})(window.angular);