import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  tableData = [
    {
      checked: false,
      id: 'Payment _RTGS Outward_09_TC_01',
      summary:
        'Verfiy if user is aable to initiate RTGS Outward payment for below combination Customer Type: Corporate ',
      status: 'Automated',
    },
    {
      checked: false,
      id: 'Payment _RTGS Outward_09_TC_02',
      summary:
        'Verfiy if user is aable to initiate RTGS Outward payment for below combination Customer Type: Corporate ',
      status: 'Automated',
    },
    {
      checked: false,
      id: 'Payment _RTGS Outward_09_TC_03',
      summary:
        'Verfiy if user is aable to initiate RTGS Outward payment for below combination',
      status: 'Automated',
    },
    {
      checked: false,
      id: 'Payment _RTGS Outward_09_TC_04',
      summary:
        'Verfiy if user is aable to initiate RTGS Outward payment for below combination',
      status: 'Automated',
    },
  ];

  userStoriesListData = [
    {
      id: 1,
      name: 'WATS 930',
      status: 'Review',
      summary:
        'As a use, I should have an option to run Ransomware testing for my DB-Table, Database and Column so that how fast.',
      testCases: [
        {
          total: '03',
          passed: '01',
          failed: '01',
          notExecuted: '01',
        },
      ],
      testPacks: [
        {
          total: '05',
          passed: '02',
          failed: '02',
          notExecuted: '01',
        },
      ],
    },
    {
      id: 2,
      name: 'WATS 931',
      status: 'Dev Done',
      summary:
        'As a use, I should have an option to run Ransomware testing for my DB-Table, Database and Column so that how fast.',
      testCases: [
        {
          total: '13',
          passed: '10',
          failed: '01',
          notExecuted: '02',
        },
      ],
      testPacks: [
        {
          total: '05',
          passed: '02',
          failed: '02',
          notExecuted: '01',
        },
      ],
    },
    {
      id: 3,
      name: 'WATS 932',
      status: 'Done',
      summary:
        'As a use, I should have an option to run Ransomware testing for my DB-Table, Database and Column so that how fast.',
      testCases: [
        {
          total: '14',
          passed: '11',
          failed: '01',
          notExecuted: '02',
        },
      ],
      testPacks: [
        {
          total: '05',
          passed: '02',
          failed: '02',
          notExecuted: '01',
        },
      ],
    },
    {
      id: 4,
      name: 'WATS 931',
      status: 'Dev Done',
      summary:
        'As a use, I should have an option to run Ransomware testing for my DB-Table, Database and Column so that how fast.',
      testCases: [
        {
          total: '12',
          passed: '10',
          failed: '01',
          notExecuted: '01',
        },
      ],
      testPacks: [
        {
          total: '06',
          passed: '02',
          failed: '02',
          notExecuted: '04',
        },
      ],
    },
  ];

  constructor() {}
}
