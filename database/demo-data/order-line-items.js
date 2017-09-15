const moment = require('moment')

module.exports = [
  {
    lineNumber: 1,
    isExpanded: false,
    days: 'MO-FR',
    time: '7-8am',
    program: 'Network23 News This Morning',
    length: '30 s',
    orderSpots: 12,
    openPreempts: null,
    trafficSpots: 12,
    trafficLogs: [
      {
        airedStatus: null,
        spotNumber: 1,
        airDay: 'Monday',
        airTime: '7:21 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: moment().subtract(2, 'weeks').weekday(1).format('MM/DD/YY'),
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 2,
        airDay: 'Wednesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate:  moment().subtract(2, 'weeks').weekday(3).format('MM/DD/YY'),
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 3,
        airDay: 'Thursday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate:  moment().subtract(2, 'weeks').weekday(4).format('MM/DD/YY'),
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 4,
        airDay: 'Tuesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate:  moment().subtract(1, 'weeks').weekday(2).format('MM/DD/YY'),
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 5,
        airDay: 'Friday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate:  moment().subtract(1, 'weeks').weekday(5).format('MM/DD/YY'),
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 6,
        airDay: 'Wednesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: moment().subtract(1, 'weeks').weekday(3).format('MM/DD/YY'),
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 7,
        airDay: 'Monday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: moment().add(1, 'weeks').weekday(1).format('MM/DD/YY'),
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 8,
        airDay: 'Tuesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: moment().add(1, 'weeks').weekday(2).format('MM/DD/YY'),
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 9,
        airDay: 'Friday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: moment().add(1, 'weeks').weekday(5).format('MM/DD/YY'),
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 10,
        airDay: 'Thursday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: moment().add(3, 'weeks').weekday(4).format('MM/DD/YY'),
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 11,
        airDay: 'Wednesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: moment().add(3, 'weeks').weekday(3).format('MM/DD/YY'),
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 12,
        airDay: 'Friday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: moment().add(3, 'weeks').weekday(5).format('MM/DD/YY'),
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      }
    ],
    agencyInvoiceDetails: [
      {
        isciAdId: null,
        stationInvoiceDate: null,
        stationInvoiceAmount: null,
        stationInvoiceNumber: null,
        makegoodNumber: null
      }
    ],
    makegoods: [
      {
        makegoodStatus: null,
        makegoodApplied: null,
        makegoodNewLines: null
      }
    ],
    currentInformation: null,
    startDate: '01/23/2017',
    endDate: '03/03/2017',
    weeks: [
      null,
      null,
      null,
      null,
      null,
      null
    ],
    weeklySpotAllocations: [
      {
        week: moment().subtract(2, 'weeks').weekday(1).format('MM/DD/YY'),
        value: 3,
        isHiatus: false,
        trafficSpots: 3
      },
      {
        week: moment().subtract(1, 'weeks').weekday(1).format('MM/DD/YY'),
        value: 3,
        isHiatus: false,
        trafficSpots: 3
      },
      {
        week: moment().weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(1, 'weeks').weekday(1).format('MM/DD/YY'),
        value: 3,
        isHiatus: false,
        trafficSpots: 3
      },
      {
        week: moment().add(2, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(3, 'weeks').weekday(1).format('MM/DD/YY'),
        value: 3,
        isHiatus: false,
        trafficSpots: 3
      },
      {
        week: moment().add(4, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(5, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(6, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(7, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(8, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(9, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(10, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      }
    ],
    spotRate: 350,
    buyerRtg: 1.5,
    videaRtg: 1.7,
    lineNumberTotal: 4200,
    buyerComment: null,
    videaToStationComments: null,
    spotOption: null,
    lineType: 'Original'
  },
  {
    lineNumber: 2,
    isExpanded: false,
    days: 'MO-FR',
    time: '8-9am',
    program: 'Network23 News This Morning',
    length: '30 s',
    orderSpots: 6,
    openPreempts: null,
    trafficSpots: 6,
    trafficLogs: [
      {
        airedStatus: null,
        spotNumber: 1,
        airDay: 'Monday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 2,
        airDay: 'Wednesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 3,
        airDay: 'Thursday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 4,
        airDay: 'Tuesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 5,
        airDay: 'Friday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 6,
        airDay: 'Wednesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 7,
        airDay: 'Monday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 8,
        airDay: 'Tuesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 9,
        airDay: 'Friday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 10,
        airDay: 'Thursday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 11,
        airDay: 'Wednesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 12,
        airDay: 'Friday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      }
    ],
    agencyInvoiceDetails: [
      {
        isciAdId: null,
        stationInvoiceDate: null,
        stationInvoiceAmount: null,
        stationInvoiceNumber: null,
        makegoodNumber: null
      }
    ],
    makegoods: [
      {
        makegoodStatus: null,
        makegoodApplied: null,
        makegoodNewLines: null
      }
    ],
    currentInformation: null,
    startDate: '02/06/2017',
    endDate: '02/17/2017',
    weeks: [
      null,
      null,
      null,
      null,
      null,
      null
    ],
    weeklySpotAllocations: [
      {
        week: moment().subtract(2, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().subtract(1, 'weeks').weekday(1).format('MM/DD/YY'),
        value: 3,
        isHiatus: false,
        trafficSpots: 3
      },
      {
        week: moment().weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(1, 'weeks').weekday(1).format('MM/DD/YY'),
        value: 3,
        isHiatus: false,
        trafficSpots: 3
      },
      {
        week: moment().add(2, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(3, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(4, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(5, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(6, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(7, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(8, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(9, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(10, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      }
    ],
    spotRate: 350,
    buyerRtg: 1.7,
    videaRtg: 1.7,
    lineNumberTotal: 2100,
    buyerComment: null,
    videaToStationComments: null,
    spotOption: null,
    lineType: 'Original'
  },
  {
    lineNumber: 3,
    isExpanded: false,
    days: 'MO-FR',
    time: '5-6pm',
    program: 'Network23 News @ 5',
    length: '30 s',
    orderSpots: 6,
    openPreempts: null,
    trafficSpots: 6,
    trafficLogs: [
      {
        airedStatus: null,
        spotNumber: 1,
        airDay: 'Monday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 2,
        airDay: 'Wednesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 3,
        airDay: 'Thursday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 4,
        airDay: 'Tuesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 5,
        airDay: 'Friday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 6,
        airDay: 'Wednesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 7,
        airDay: 'Monday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 8,
        airDay: 'Tuesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 9,
        airDay: 'Friday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 10,
        airDay: 'Thursday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 11,
        airDay: 'Wednesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 12,
        airDay: 'Friday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      }
    ],
    agencyInvoiceDetails: [
      {
        isciAdId: null,
        stationInvoiceDate: null,
        stationInvoiceAmount: null,
        stationInvoiceNumber: null,
        makegoodNumber: null
      }
    ],
    makegoods: [
      {
        makegoodStatus: null,
        makegoodApplied: null,
        makegoodNewLines: null
      }
    ],
    currentInformation: null,
    startDate: '01/23/2017',
    endDate: '02/10/2017',
    weeks: [
      null,
      null,
      null,
      null,
      null,
      null
    ],
    weeklySpotAllocations: [
      {
        week: moment().subtract(2, 'weeks').weekday(1).format('MM/DD/YY'),
        value: 3,
        isHiatus: false,
        trafficSpots: 3
      },
      {
        week: moment().subtract(1, 'weeks').weekday(1).format('MM/DD/YY'),
        value: 3,
        isHiatus: false,
        trafficSpots: 3
      },
      {
        week: moment().weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(1, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(2, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(3, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(4, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(5, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(6, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(7, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(8, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(9, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(10, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      }
    ],
    spotRate: 550,
    buyerRtg: 1.8,
    videaRtg: 1.8,
    lineNumberTotal: 3300,
    buyerComment: null,
    videaToStationComments: null,
    spotOption: null,
    lineType: 'Original'
  },
  {
    lineNumber: 4,
    isExpanded: false,
    days: 'MO-FR',
    time: '6-7pm',
    program: 'Network23 News @ 6',
    length: '30 s',
    orderSpots: 6,
    openPreempts: 2,
    trafficSpots: 4,
    trafficLogs: [
      {
        airedStatus: null,
        spotNumber: 1,
        airDay: 'Tuesday',
        airTime: '7:00 PM',
        programPlaced: 'Network23 News @ 6',
        priority: 'P-05',
        statusName: 'Displaced',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null,
        weeks: [
          null,
          2,
          null,
          2,
          null,
          2
        ],
        weeklySpotAllocations: [
          {
            week: moment().subtract(2, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().subtract(1, 'weeks').weekday(1).format('MM/DD/YY'),
            value: 1,
            isHiatus: false,
            trafficSpots: 0
          },
          {
            week: moment().weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(1, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(2, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(3, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(4, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(5, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(6, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(7, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(8, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(9, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(10, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          }
        ]
      },
      {
        airedStatus: null,
        spotNumber: 2,
        airDay: 'Thursday',
        airTime: '7:00 PM',
        programPlaced: 'Network23 News @ 6',
        priority: 'P-05',
        statusName: 'Displaced',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null,
        weeks: [
          null,
          2,
          null,
          2,
          null,
          2
        ],
        weeklySpotAllocations: [
          {
            week: moment().subtract(2, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().subtract(1, 'weeks').weekday(1).format('MM/DD/YY'),
            value: 1,
            isHiatus: false,
            trafficSpots: 0
          },
          {
            week: moment().weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(1, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(2, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(3, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(4, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(5, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(6, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(7, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(8, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(9, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(10, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          }
        ]
      },
      {
        airedStatus: null,
        spotNumber: 3,
        airDay: 'Thursday',
        airTime: '6:21 AM',
        programPlaced: 'Network23 News @ 6',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null,
        weeks: [
          null,
          2,
          null,
          2,
          null,
          2
        ],
        weeklySpotAllocations: [
          {
            week: moment().subtract(2, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().subtract(1, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(1, 'weeks').weekday(1).format('MM/DD/YY'),
            value: 1,
            isHiatus: false,
            trafficSpots: 1
          },
          {
            week: moment().add(2, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(3, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(4, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(5, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(6, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(7, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(8, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(9, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(10, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          }
        ]
      },
      {
        airedStatus: null,
        spotNumber: 4,
        airDay: 'Tuesday',
        airTime: '6:47 AM',
        programPlaced: 'Network23 News @ 6',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null,
        weeks: [
          null,
          2,
          null,
          2,
          null,
          2
        ],
        weeklySpotAllocations: [
          {
            week: moment().subtract(2, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().subtract(1, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(1, 'weeks').weekday(1).format('MM/DD/YY'),
            value: 1,
            isHiatus: false,
            trafficSpots: 1
          },
          {
            week: moment().add(2, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(3, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(4, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(5, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(6, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(7, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(8, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(9, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(10, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          }
        ]
      },
      {
        airedStatus: null,
        spotNumber: 5,
        airDay: 'Wednesday',
        airTime: '5:58 PM',
        programPlaced: 'Network23 News @ 6',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null,
        weeks: [
          null,
          2,
          null,
          2,
          null,
          2
        ],
        weeklySpotAllocations: [
          {
            week: moment().subtract(2, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().subtract(1, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(1, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(2, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(3, 'weeks').weekday(1).format('MM/DD/YY'),
            value: 1,
            isHiatus: false,
            trafficSpots: 1
          },
          {
            week: moment().add(4, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(5, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(6, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(7, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(8, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(9, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(10, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          }
        ]
      },
      {
        airedStatus: null,
        spotNumber: 12,
        airDay: 'Friday',
        airTime: '7:00 PM',
        programPlaced: 'Network23 News @ 6',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null,
        weeks: [
          null,
          2,
          null,
          2,
          null,
          2
        ],
        weeklySpotAllocations: [
          {
            week: moment().subtract(2, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().subtract(1, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(1, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(2, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(3, 'weeks').weekday(1).format('MM/DD/YY'),
            value: 1,
            isHiatus: false,
            trafficSpots: 1
          },
          {
            week: moment().add(4, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(5, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(6, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(7, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(8, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(9, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          },
          {
            week: moment().add(10, 'weeks').weekday(1).format('MM/DD/YY'),
            value: null,
            isHiatus: false,
            trafficSpots: null
          }
        ]
      }
    ],
    agencyInvoiceDetails: [
      {
        isciAdId: null,
        stationInvoiceDate: null,
        stationInvoiceAmount: null,
        stationInvoiceNumber: null,
        makegoodNumber: null
      }
    ],
    makegoods: [
      {
        makegoodStatus: null,
        makegoodApplied: null,
        makegoodNewLines: null
      }
    ],
    currentInformation: null,
    startDate: '02/13/2017',
    endDate: '03/03/2017',
    weeks: [
      null,
      null,
      null,
      null,
      null,
      null
    ],
    weeklySpotAllocations: [
      {
        week: moment().subtract(2, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().subtract(1, 'weeks').weekday(1).format('MM/DD/YY'),
        value: 2,
        isHiatus: false,
        trafficSpots: 0
      },
      {
        week: moment().weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(1, 'weeks').weekday(1).format('MM/DD/YY'),
        value: 2,
        isHiatus: false,
        trafficSpots: 2
      },
      {
        week: moment().add(2, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(3, 'weeks').weekday(1).format('MM/DD/YY'),
        value: 2,
        isHiatus: false,
        trafficSpots: 2
      },
      {
        week: moment().add(4, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(5, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(6, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(7, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(8, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(9, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(10, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      }
    ],
    spotRate: 550,
    buyerRtg: 2.0,
    videaRtg: 2.2,
    lineNumberTotal: 3300,
    buyerComment: null,
    videaToStationComments: null,
    spotOption: null,
    lineType: 'Original'
  },
  {
    lineNumber: 5,
    isExpanded: false,
    days: 'MO-FR',
    time: '9-10pm',
    program: 'Network23 News @ 9',
    length: '30 s',
    orderSpots: 6,
    openPreempts: null,
    trafficSpots: 6,
    trafficLogs: [
      {
        airedStatus: null,
        spotNumber: 1,
        airDay: 'Monday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 2,
        airDay: 'Wednesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 3,
        airDay: 'Thursday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 4,
        airDay: 'Tuesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 5,
        airDay: 'Friday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 6,
        airDay: 'Wednesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 7,
        airDay: 'Monday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 8,
        airDay: 'Tuesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 9,
        airDay: 'Friday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 10,
        airDay: 'Thursday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 11,
        airDay: 'Wednesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 12,
        airDay: 'Friday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      }
    ],
    agencyInvoiceDetails: [
      {
        isciAdId: null,
        stationInvoiceDate: null,
        stationInvoiceAmount: null,
        stationInvoiceNumber: null,
        makegoodNumber: null
      }
    ],
    makegoods: [
      {
        makegoodStatus: null,
        makegoodApplied: null,
        makegoodNewLines: null
      }
    ],
    currentInformation: null,
    startDate: '02/06/2017',
    endDate: '03/03/2017',
    weeks: [
      null,
      null,
      null,
      null,
      null,
      null
    ],
    weeklySpotAllocations: [
      {
        week: moment().subtract(2, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().subtract(1, 'weeks').weekday(1).format('MM/DD/YY'),
        value: 2,
        isHiatus: false,
        trafficSpots: 2
      },
      {
        week: moment().weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(1, 'weeks').weekday(1).format('MM/DD/YY'),
        value: 2,
        isHiatus: false,
        trafficSpots: 2
      },
      {
        week: moment().add(2, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(3, 'weeks').weekday(1).format('MM/DD/YY'),
        value: 2,
        isHiatus: false,
        trafficSpots: 2
      },
      {
        week: moment().add(4, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(5, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(6, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(7, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(8, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(9, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(10, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      }
    ],
    spotRate: 1400,
    buyerRtg: 3.0,
    videaRtg: 3.0,
    lineNumberTotal: 8400,
    buyerComment: null,
    videaToStationComments: null,
    spotOption: null,
    lineType: 'Original'
  },
  {
    lineNumber: 6,
    isExpanded: false,
    days: 'MO-FR',
    time: '11-11:30pm',
    program: 'Seinfeld',
    length: '30 s',
    orderSpots: 6,
    openPreempts: null,
    trafficSpots: 6,
    trafficLogs: [
      {
        airedStatus: null,
        spotNumber: 1,
        airDay: 'Monday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 2,
        airDay: 'Wednesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 3,
        airDay: 'Thursday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 4,
        airDay: 'Tuesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 5,
        airDay: 'Friday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 6,
        airDay: 'Wednesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 7,
        airDay: 'Monday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 8,
        airDay: 'Tuesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 9,
        airDay: 'Friday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 10,
        airDay: 'Thursday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 11,
        airDay: 'Wednesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 12,
        airDay: 'Friday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      }
    ],
    agencyInvoiceDetails: [
      {
        isciAdId: null,
        stationInvoiceDate: null,
        stationInvoiceAmount: null,
        stationInvoiceNumber: null,
        makegoodNumber: null
      }
    ],
    makegoods: [
      {
        makegoodStatus: null,
        makegoodApplied: null,
        makegoodNewLines: null
      }
    ],
    currentInformation: null,
    startDate: '01/23/2017',
    endDate: '02/10/2017',
    weeks: [
      null,
      null,
      null,
      null,
      null,
      null
    ],
    weeklySpotAllocations: [
      {
        week: moment().subtract(2, 'weeks').weekday(1).format('MM/DD/YY'),
        value: 3,
        isHiatus: false,
        trafficSpots: 3
      },
      {
        week: moment().subtract(1, 'weeks').weekday(1).format('MM/DD/YY'),
        value: 3,
        isHiatus: false,
        trafficSpots: 3
      },
      {
        week: moment().weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(1, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(2, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(3, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(4, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(5, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(6, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(7, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(8, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(9, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(10, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      }
    ],
    spotRate: 200,
    buyerRtg: 1.1,
    videaRtg: 1.2,
    lineNumberTotal: 1200,
    buyerComment: null,
    videaToStationComments: null,
    spotOption: null,
    lineType: 'Original'
  },
  {
    lineNumber: 7,
    isExpanded: false,
    days: 'MO-FR',
    time: '12-12:30am',
    program: 'Anger Management',
    length: '30 s',
    orderSpots: 3,
    openPreempts: null,
    trafficSpots: 3,
    trafficLogs: [
      {
        airedStatus: null,
        spotNumber: 1,
        airDay: 'Monday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 2,
        airDay: 'Wednesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 3,
        airDay: 'Thursday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 4,
        airDay: 'Tuesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 5,
        airDay: 'Friday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 6,
        airDay: 'Wednesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 7,
        airDay: 'Monday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 8,
        airDay: 'Tuesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 9,
        airDay: 'Friday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 10,
        airDay: 'Thursday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 11,
        airDay: 'Wednesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 12,
        airDay: 'Friday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      }
    ],
    agencyInvoiceDetails: [
      {
        isciAdId: null,
        stationInvoiceDate: null,
        stationInvoiceAmount: null,
        stationInvoiceNumber: null,
        makegoodNumber: null
      }
    ],
    makegoods: [
      {
        makegoodStatus: null,
        makegoodApplied: null,
        makegoodNewLines: null
      }
    ],
    currentInformation: null,
    startDate: '01/23/2017',
    endDate: '01/27/2017',
    weeks: [
      null,
      null,
      null,
      null,
      null,
      null
    ],
    weeklySpotAllocations: [
      {
        week: moment().subtract(2, 'weeks').weekday(1).format('MM/DD/YY'),
        value: 3,
        isHiatus: false,
        trafficSpots: 3
      },
      {
        week: moment().subtract(1, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(1, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(2, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(3, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(4, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(5, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(6, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(7, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(8, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(9, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(10, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      }
    ],
    spotRate: 100,
    buyerRtg: 0.7,
    videaRtg: 0.7,
    lineNumberTotal: 300,
    buyerComment: null,
    videaToStationComments: null,
    spotOption: null,
    lineType: 'Original'
  },
  {
    lineNumber: 8,
    isExpanded: false,
    days: 'Mo',
    time: '8-9pm',
    program: 'Gotham',
    length: '30 s',
    orderSpots: 2,
    openPreempts: null,
    trafficSpots: 2,
    trafficLogs: [
      {
        airedStatus: null,
        spotNumber: 1,
        airDay: 'Monday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 2,
        airDay: 'Wednesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 3,
        airDay: 'Thursday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 4,
        airDay: 'Tuesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 5,
        airDay: 'Friday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 6,
        airDay: 'Wednesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 7,
        airDay: 'Monday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 8,
        airDay: 'Tuesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 9,
        airDay: 'Friday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 10,
        airDay: 'Thursday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 11,
        airDay: 'Wednesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 12,
        airDay: 'Friday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      }
    ],
    agencyInvoiceDetails: [
      {
        isciAdId: null,
        stationInvoiceDate: null,
        stationInvoiceAmount: null,
        stationInvoiceNumber: null,
        makegoodNumber: null
      }
    ],
    makegoods: [
      {
        makegoodStatus: null,
        makegoodApplied: null,
        makegoodNewLines: null
      }
    ],
    currentInformation: null,
    startDate: '02/06/2017',
    endDate: '02/13/2017',
    weeks: [
      null,
      null,
      null,
      null,
      null,
      null
    ],
    weeklySpotAllocations: [
      {
        week: moment().subtract(2, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().subtract(1, 'weeks').weekday(1).format('MM/DD/YY'),
        value: 1,
        isHiatus: false,
        trafficSpots: 1
      },
      {
        week: moment().weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(1, 'weeks').weekday(1).format('MM/DD/YY'),
        value: 1,
        isHiatus: false,
        trafficSpots: 1
      },
      {
        week: moment().add(2, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(3, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(4, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(5, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(6, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(7, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(8, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(9, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(10, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      }
    ],
    spotRate: 2500,
    buyerRtg: 3.0,
    videaRtg: 3.3,
    lineNumberTotal: 5000,
    buyerComment: null,
    videaToStationComments: null,
    spotOption: null,
    lineType: 'Original'
  },
  {
    lineNumber: 9,
    isExpanded: false,
    days: 'Th',
    time: '9-10am',
    program: 'Rosewood',
    length: '30 s',
    orderSpots: 2,
    openPreempts: null,
    trafficSpots: 2,
    trafficLogs: [
      {
        airedStatus: null,
        spotNumber: 1,
        airDay: 'Monday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 2,
        airDay: 'Wednesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 3,
        airDay: 'Thursday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 4,
        airDay: 'Tuesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 5,
        airDay: 'Friday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 6,
        airDay: 'Wednesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 7,
        airDay: 'Monday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 8,
        airDay: 'Tuesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 9,
        airDay: 'Friday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 10,
        airDay: 'Thursday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 11,
        airDay: 'Wednesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 12,
        airDay: 'Friday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      }
    ],
    agencyInvoiceDetails: [
      {
        isciAdId: null,
        stationInvoiceDate: null,
        stationInvoiceAmount: null,
        stationInvoiceNumber: null,
        makegoodNumber: null
      }
    ],
    makegoods: [
      {
        makegoodStatus: null,
        makegoodApplied: null,
        makegoodNewLines: null
      }
    ],
    currentInformation: null,
    startDate: '01/26/2017',
    endDate: '03/02/2017',
    weeks: [
      null,
      null,
      null,
      null,
      null,
      null
    ],
    weeklySpotAllocations: [
      {
        week: moment().subtract(2, 'weeks').weekday(1).format('MM/DD/YY'),
        value: 1,
        isHiatus: false,
        trafficSpots: 1
      },
      {
        week: moment().subtract(1, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(1, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(2, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(3, 'weeks').weekday(1).format('MM/DD/YY'),
        value: 1,
        isHiatus: false,
        trafficSpots: 1
      },
      {
        week: moment().add(4, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(5, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(6, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(7, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(8, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(9, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(10, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      }
    ],
    spotRate: 1650,
    buyerRtg: 2.0,
    videaRtg: 2.0,
    lineNumberTotal: 3300,
    buyerComment: null,
    videaToStationComments: null,
    spotOption: null,
    lineType: 'Original'
  },
  {
    lineNumber: 10,
    isExpanded: false,
    days: 'Su',
    time: '7-7:30am',
    program: 'The Simpsons',
    length: '30 s',
    orderSpots: 2,
    openPreempts: null,
    trafficSpots: 2,
    trafficLogs: [
      {
        airedStatus: null,
        spotNumber: 1,
        airDay: 'Monday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 2,
        airDay: 'Wednesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 3,
        airDay: 'Thursday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 4,
        airDay: 'Tuesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 5,
        airDay: 'Friday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 6,
        airDay: 'Wednesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 7,
        airDay: 'Monday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 8,
        airDay: 'Tuesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 9,
        airDay: 'Friday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 10,
        airDay: 'Thursday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 11,
        airDay: 'Wednesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 12,
        airDay: 'Friday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      }
    ],
    agencyInvoiceDetails: [
      {
        isciAdId: null,
        stationInvoiceDate: null,
        stationInvoiceAmount: null,
        stationInvoiceNumber: null,
        makegoodNumber: null
      }
    ],
    makegoods: [
      {
        makegoodStatus: null,
        makegoodApplied: null,
        makegoodNewLines: null
      }
    ],
    currentInformation: null,
    startDate: '02/12/2017',
    endDate: '02/16/2017',
    weeks: [
      null,
      null,
      null,
      null,
      null,
      null
    ],
    weeklySpotAllocations: [
      {
        week: moment().subtract(2, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().subtract(1, 'weeks').weekday(1).format('MM/DD/YY'),
        value: 1,
        isHiatus: false,
        trafficSpots: 1
      },
      {
        week: moment().weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(1, 'weeks').weekday(1).format('MM/DD/YY'),
        value: 1,
        isHiatus: false,
        trafficSpots: 1
      },
      {
        week: moment().add(2, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(3, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(4, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(5, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(6, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(7, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(8, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(9, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(10, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      }
    ],
    spotRate: 2650,
    buyerRtg: 3.0,
    videaRtg: 3.2,
    lineNumberTotal: 5300,
    buyerComment: null,
    videaToStationComments: null,
    spotOption: null,
    lineType: 'Original'
  },
  {
    lineNumber: 11,
    isExpanded: false,
    days: 'Su',
    time: '8-8:30am',
    program: 'Family Guy',
    length: '30 s',
    orderSpots: 2,
    openPreempts: null,
    trafficSpots: 2,
    trafficLogs: [
      {
        airedStatus: null,
        spotNumber: 1,
        airDay: 'Monday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 2,
        airDay: 'Wednesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 3,
        airDay: 'Thursday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 4,
        airDay: 'Tuesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 5,
        airDay: 'Friday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 6,
        airDay: 'Wednesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 7,
        airDay: 'Monday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 8,
        airDay: 'Tuesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 9,
        airDay: 'Friday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 10,
        airDay: 'Thursday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 11,
        airDay: 'Wednesday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      },
      {
        airedStatus: null,
        spotNumber: 12,
        airDay: 'Friday',
        airTime: '7:00 AM',
        programPlaced: 'Network23 News This Morning',
        priority: 'P-05',
        statusName: 'Placed',
        airDate: null,
        stationLineNumber: 1,
        altLineNumber: 1,
        makegoodNumber: null
      }
    ],
    agencyInvoiceDetails: [
      {
        isciAdId: null,
        stationInvoiceDate: null,
        stationInvoiceAmount: null,
        stationInvoiceNumber: null,
        makegoodNumber: null
      }
    ],
    makegoods: [
      {
        makegoodStatus: null,
        makegoodApplied: null,
        makegoodNewLines: null
      }
    ],
    currentInformation: null,
    startDate: '01/26/2017',
    endDate: '03/02/2017',
    weeks: [
      null,
      null,
      null,
      null,
      null,
      null
    ],
    weeklySpotAllocations: [
      {
        week: moment().subtract(2, 'weeks').weekday(1).format('MM/DD/YY'),
        value: 1,
        isHiatus: false,
        trafficSpots: 1
      },
      {
        week: moment().subtract(1, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(1, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(2, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(3, 'weeks').weekday(1).format('MM/DD/YY'),
        value: 1,
        isHiatus: false,
        trafficSpots: 1
      },
      {
        week: moment().add(4, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(5, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(6, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(7, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(8, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(9, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      },
      {
        week: moment().add(10, 'weeks').weekday(1).format('MM/DD/YY'),
        value: null,
        isHiatus: false,
        trafficSpots: null
      }
    ],
    spotRate: 2300,
    buyerRtg: 3.0,
    videaRtg: 3.2,
    lineNumberTotal: 4600,
    buyerComment: null,
    videaToStationComments: null,
    spotOption: null,
    lineType: 'Original'
  }
]
