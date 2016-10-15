  var userItem = `<div class="view">
      <button class="destroy"  ng-click="$ctrl.remove({user:$ctrl.user})"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button>
    </div>`;

  let app = angular.module('mailpost', ['ui.router']);

  app.config(function($stateProvider) {
    
    $stateProvider.state('home', {
      url: '/',
      template: `<home />`
    })
    .state('boxtypes', {
      url: 'boxtypes',
      template: `<boxtypes />`
    })
    .state('box', {
      parent: 'boxtypes',
      url: '/box-:boxId',
      template: `<box box-id="boxId"/>`,
      controller: function($stateParams, $scope) {
        $scope.boxId = $stateParams.boxId;
      }
    })
    .state('mail', {
      parent: 'box',
      url: '/mail-:mailId',
      template: `<mail mail-id="mailId"/>`,
      controller: function($stateParams, $scope) {
        $scope.mailId = $stateParams.mailId;
      }
    });
    
    $stateProvider.state('users', {
      url: 'users',
      template: `<users />`
    })
    .state('user', {
      parent: 'users',
      url: '/status-:userId',
      template: `<user user-id="userId"/>`,
      controller: function($stateParams, $scope) {
        $scope.userId = $stateParams.userId;
      }
    });
    
  });
    
  app.component('home', {
    template: `<p>Main page is under construction!</p>`
  })
  .component('boxtypes', {
    template: `<ul>
        <li><h3 ui-sref="box({boxId:1})" ui-sref-active="active">Inbox (4)</h3></li>
        <li><h3 ui-sref="box({boxId:2})" ui-sref-active="active">Outbox (3)</h3></li>
        <li><h3 ui-sref="box({boxId:3})" ui-sref-active="active">Drafts (1)</h3></li>
        <li><h3 ui-sref="box({boxId:4})" ui-sref-active="active">Spam (2)</h3></li>
        <li><h3 ui-sref="box({boxId:5})" ui-sref-active="active">Trash (0)</h3></li>
      </ul>
      <div class="mail_list_block"><ui-view></ui-view></div>`
  })
  .component('box', {
    bindings: {
      boxId: '<',
    },
    template: `<div ng-repeat="mail in $ctrl.mails[$ctrl.boxId]" mail="mail">
        <div class="one_mail">
          <label class="shorttext_label" for="mail_checking_{{mail.id}}">
            <div class="mail_short">
              <input id='mail_checking_{{mail.id}}' class='checking' type="checkbox" ng-model="show">
              <label for='mail_checking_{{mail.id}}' class="mail_shorttext"><span class="sender_span">{{mail.sender}}</span>/<span class="subject_span">{{mail.subject}}</span></label>
              <div class="mail_date">{{mail.date}}</div>
            </div>
          </label>
          <div ng-if="show" class="mail_full">
            <div class="mail_head"><span>From</span>{{mail.sender}}</div>
            <div class="mail_head"><span>Subject</span>{{mail.subject}}</div>
            <div class="mail_body">{{mail.text}}</div>
            <div class="mail_body">{{mail.toggle}}</div>
          </div>
        </div>
      </div>`,
    controller: function() {
      this.mails = {
        1: [{
          'id': 1,
          'shorttext': 'test',
          'date': '20:37:24 04/10/2016',
          'sender': 'Clarc',
          'subject': 'Another one subject',
          'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }, {
          'id': 2,
          'shorttext': 'test2',
          'date': '04:23:47 03/10/2016',
          'sender': 'Kim',
          'subject': 'Subject from Kim',
          'text': 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }, {
          'id': 3,
          'shorttext': 'test3',
          'date': '09:37:40 02/10/2016',
          'sender': 'Alan',
          'subject': 'Third subject',
          'text': 'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }, {
          'id': 4,
          'shorttext': 'test4',
          'date': '09:37:40 02/10/2016',
          'sender': 'Dennis',
          'subject': 'Fourth subject',
          'text': '1Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }],
        2: [{
          'id': 1,
          'shorttext': 'test4',
          'date': '20:37:24 04/10/2016',
          'sender': 'John',
          'subject': 'First subject',
          'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }, {
          'id': 2,
          'shorttext': 'test5',
          'date': '04:23:47 03/10/2016',
          'sender': 'Sam',
          'subject': 'Second subject',
          'text': 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }, {
          'id': 3,
          'shorttext': 'test36',
          'date': '09:37:40 02/10/2016',
          'sender': 'Alan',
          'subject': 'Third subject',
          'text': 'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }],
        3: [{
          'id': 1,
          'shorttext': 'test36',
          'date': '09:37:40 02/10/2016',
          'sender': 'Alex',
          'subject': 'Another subject',
          'text': '22Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }],
        4: [{
          'id': 1,
          'shorttext': 'test36',
          'date': '09:37:40 02/10/2016',
          'sender': 'Susy',
          'subject': 'Another subject from Susy',
          'text': '22Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }, {
          'id': 2,
          'shorttext': 'test36',
          'date': '09:37:40 02/10/2016',
          'sender': 'Sasha',
          'subject': 'Subject from Sasha',
          'text': '22Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }]
      }
    }
  })
  .component('mail', {
    bindings: {
      mailId: '<',
    }
  })
  .component('users', {
    template: `<ul>
        <li><h3 ui-sref="user({userId:1})" ui-sref-active="active">Active (3)</h3></li>
        <li><h3 ui-sref="user({userId:2})" ui-sref-active="active">Banned (1)</h3></li>
        <li><h3 ui-sref="user({userId:3})" ui-sref-active="active">Trash (0)</h3></li>
      </ul>
      <div class="user_list_block"><ui-view></ui-view></div>`
  })
  .component('user', {
    bindings: {
      userId: '<',
    },
    template: `<div class="one_user_card" ng-repeat="user in $ctrl.list">
        <user-item item="user" remove="$ctrl.removeUser(user)"></user-item>
        <!--<img src="{{user.avatarUrl}}">-->
        <img src="https://randomuser.me/api/portraits/thumb/men/57.jpg">
        <h4>{{user.fullName}}</h4>
        <div class="user_data_block">
          <p><span class="left_value">Birthdate</span><span class="right_value">{{user.birthdate}}</span></p>
          <p><span class="left_value">Gender</span><span class="right_value">{{user.gender}}</span></p>
          <p><span class="left_value">Address</span><span class="right_value">{{user.address}}</span></p>
          <p><span class="left_value">E-mail</span><span class="right_value"><a hrseref="mailto:{{user.email}}">{{user.email}}</a></span></p>
        </div>
      </div>`,
    controller: function() {
      this.list = [{
        'id': 1,
        'fullName': 'Samson',
        'date': '20:37:24 04/10/2016',
        'sender': 'John',
        'subject': 'First subject',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }, {
        'id': 2,
        'fullName': 'test2',
        'date': '04:23:47 03/10/2016',
        'sender': 'Sam',
        'subject': 'Second subject',
        'text': 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }, {
        'id': 3,
        'fullName': 'test3',
        'date': '09:37:40 02/10/2016',
        'sender': 'Alan',
        'subject': 'Third subject',
        'text': 'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }, {
        'id': 4,
        'fullName': 'test4',
        'date': '09:37:40 02/10/2016',
        'sender': 'Danny',
        'subject': 'Fourth subject',
        'text': '1Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }];
    }
  })
  .component('userItem', {  
    bindings: {
      user: '<item',
      remove: '&'
    },
    template: userItem,
    controller: function(Logic) {
      this.true = true;
    }
  });
  
  

