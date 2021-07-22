import * as _ from "underscore";
import * as moment from "moment";
import * as _timezone from "moment-timezone";

// tslint:disable: prefer-const
// tslint:disable: variable-name
export function getStartOfDayUTCDate(d) {
  return new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
}

export function getStartOfDayTimestamp(date) {
  let startOfDay: any;
  startOfDay = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  return startOfDay / 1000;
}
export function hasValue(data): boolean {
  if (data === undefined || data === "" || data === null) {
    return false;
  }
  return true;
}
export function removeSpaces(content): string {
  return content.replace(/\s/g, "");
}

export function getUUid(): string {
  let dt = new Date().getTime();
  const uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    // tslint:disable-next-line: no-bitwise
    const r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    // tslint:disable: triple-equals
    // tslint:disable: no-bitwise
    return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
}
export function isNotEmptyVal(val): boolean {
  return !isEmptyVal(val);
}

export function isEmptyVal(val): boolean {
  if (_.isUndefined(val)) {
    return true;
  }

  if (_.isNull(val)) {
    return true;
  }

  if (val instanceof Array) {
    return val.length === 0;
  }

  if (isEmptyString(val)) {
    return true;
  }

  if (_.isNaN(val)) {
    return true;
  }

  return false;
}

export function isEmptyString(str) {
  str = "" + str;
  return str.trim().length === 0;
}

export function isNotEmptyString(str) {
  str = "" + str;
  return str.trim().length > 0;
}

export function isEmptyObj(obj) {
  if (typeof obj === "undefined") {
    return true;
  }
  if (_.isNull(obj)) {
    return true;
  }
  return Object.keys(obj).length === 0;
}

export function moveArrayElement(array, old_index, new_index) {
  if (new_index >= array.length) {
    let k = new_index - array.length;
    while (k-- + 1) {
      array.push(undefined);
    }
  }
  array.splice(new_index, 0, array.splice(old_index, 1)[0]);
}

export function getUTCTimeStampEndDay(selectedDate) {
  const date = new Date(selectedDate);
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth();
  const day = date.getDate();
  const startHour = Date.UTC(year, month, day, 23, 59, 59);
  const timestamp = startHour / 1000;
  return timestamp;
}

export function getUTCStartFromMoment(start) {
  let startDt = new Date(
    Date.UTC(
      parseInt(start.format("YYYY")),
      parseInt(start.format("MM")) - 1,
      parseInt(start.format("DD")),
      0,
      0,
      0,
      0
    )
  );

  return moment(startDt.getTime()).unix();
}

export function getUTCTimeStamp(selectedDate) {
  selectedDate = moment(selectedDate).unix();
  selectedDate = moment.unix(selectedDate).format("YYYY-MM-DD");
  const UTCDate = moment(selectedDate + " 0:00 +0000", "YYYY-MM-DD HH:mm Z");
  const timeStamp = moment(UTCDate).unix();
  return timeStamp;
}

export function getUTCEndTimeStamp(selectedDate) {
  selectedDate = moment(selectedDate).unix();
  selectedDate = moment.unix(selectedDate).format("YYYY-MM-DD");
  const UTCDate = moment(selectedDate + " 23:59 +0000", "YYYY-MM-DD HH:mm Z");
  const timeStamp = moment(UTCDate).unix();
  return timeStamp;
}

export function replaceNullByEmptyString(obj) {
  _.forEach(obj, (val, key) => {
    if (_.isUndefined(val) || _.isNull(val)) {
      obj[key] = "";
    }
  });
}

export function replaceNullByEmptyStringArray(array) {
  _.forEach(array, (obj: any) => {
    replaceNullByEmptyString(obj);
  });
}

export function getParams(params) {
  let querystring = "";
  params.forEach((value, key) => {
    querystring += key + "=" + value;
    querystring += "&";
  });
  return querystring.slice(0, querystring.length - 1);
}
export function getParamsforReminder(params) {
  params.tz = getTimezone();
  let querystring = "";
  for (let [key, value] of Object.entries(params)) {
    querystring += key + "=" + value;
    querystring += "&";
  }
  return querystring.slice(0, querystring.length - 1);
}

export function getParamsWithTimeZone(params): string {
  let tz = getTimezone();
  let timeZone = _timezone.tz.guess();
  params.tz = timeZone;
  let querystring = "";
  for (let [key, value] of Object.entries(params)) {
    querystring += key + "=" + value;
    querystring += "&";
  }

  return querystring.slice(0, querystring.length - 1);
}

export function getTimezone() {
  const offset = new Date().getTimezoneOffset();
  const o = Math.abs(offset);
  return (
    (offset < 0 ? "+" : "-") +
    ("00" + Math.floor(o / 60)).slice(-2) +
    ":" +
    ("00" + (o % 60)).slice(-2)
  );
}

export function getNotificationLocation(sectors) {
  let placeArr = [];
  _.forEach(sectors, (item) => {
    switch (item) {
      case 1: // event
        placeArr.push("Event");
        break;
      case 2: // task
        placeArr.push("Task");
        break;
      case 3: // reminders
        placeArr.push("Event_Reminder");
        placeArr.push("Task_Reminder");
        break;
      case 4: // Email
        placeArr.push("Email");
        break;
      case 5: // sms
        placeArr.push("Client_Messenger");
        break;
      case 6: // Sidebar_Comment
        placeArr.push("Sidebar_Comment");
        placeArr.push("Sidebar_Post");
        break;
      case 7:
        placeArr.push("Matter");
        break;
      case 8:
        placeArr.push("Intake");
        break;
      case 9:
        placeArr.push("UberTrip");
        break;
    }
  });
  return placeArr;
}

export function processNotification(res) {
  let now = moment(new Date()); // todays date
  _.forEach(res, (currentItem: any) => {
    let end = moment.unix(currentItem.created_on); // another date
    let duration = moment.duration(now.diff(end));
    currentItem.createdHoursBack = Math.floor(duration.asHours());
    currentItem.createdMinuteBack = Math.floor(duration.asMinutes());
    currentItem.notiDots = false;
    //
    if (currentItem.notification_type == "Sidebar_Comment") {
      let notData = JSON.parse(currentItem.notification_text);
      currentItem.text = notData.notification_text;
      currentItem.nid = notData.nid;
      currentItem.comment = notData.comment_body_value;
      currentItem.post = notData.body_value;
    }
    if (currentItem.notification_type == "Sidebar_Post") {
      let notData = JSON.parse(currentItem.notification_text);
      currentItem.text = notData.notification_text;
      currentItem.nid = notData.nid;
      currentItem.post = notData.body_value;
    }
    if (currentItem.notification_type == "Email") {
      let notData = JSON.parse(currentItem.notification_text);
      currentItem.mail_body = notData.mail_body;
      currentItem.senders_name = notData.senders_name;
      currentItem.subject = notData.subject;
    }
    if (currentItem.notification_type == "Event") {
      currentItem.text = currentItem.notification_text;
      currentItem.type = "event";
    }
    if (currentItem.notification_type == "Task") {
      currentItem.text = currentItem.notification_text;
      currentItem.type = "task";
    }
    if (currentItem.notification_type == "Event_Reminder") {
      let notData = JSON.parse(currentItem.notification_text);
      currentItem.text = notData.notification_text;
      currentItem.type = "event";
    }
    if (currentItem.notification_type == "Task_Reminder") {
      let notData = JSON.parse(currentItem.notification_text);
      currentItem.text = notData.notification_text;
      currentItem.type = "task";
    }

    if (currentItem.notification_type == "Matter") {
      currentItem.text = currentItem.notification_text;
      currentItem.type = "matter";
    }

    if (currentItem.notification_type == "Intake") {
      currentItem.text = currentItem.notification_text;
      currentItem.type = "intake";
    }

    if (currentItem.notification_type == "Client_Messenger") {
      let notData = JSON.parse(currentItem.notification_text);
      currentItem.sender_name = notData.sender_name;
      currentItem.text = notData.message;
      currentItem.is_sms = notData.is_sms;
    }
    if (currentItem.notification_type == "UberTrip") {
      currentItem.text = currentItem.notification_text;
      currentItem.type = 'UberTrip';
    }
  });

  return res;
}

export function mapKeys(data) {
  const obj: any = {};

  obj.contact_type = JSON.parse(data.matter_contact_type);

  obj.states = [];
  _.forEach(data.states, (item: any) => {
    obj.states.push(item.name.toString());
  });

  return obj;
}

export function _isEmptyVal(val) {
  if (_.isUndefined(val)) {
    return true;
  }
  if (_.isNaN(val)) {
    return true;
  }
  if (val instanceof Array) {
    return val.length === 0;
  }
  if (val instanceof Object) {
    return Object.keys(val).length === 0;
  }
  if (_.isNull(val)) {
    return true;
  }
  if (_isEmptyString(val)) {
    return true;
  }
}

export function _isNotEmptyVal(val) {
  return !_isEmptyVal(val);
}

export function _isEmptyString(str) {
  return str.toString().trim().length === 0;
}

export function _isNotEmptyString(str) {
  return str.toString().trim().length > 0;
}

export function _isEmptyObj(val) {
  if (_.isUndefined(val)) {
    return true;
  }
  if (_.isNull(val)) {
    return true;
  }
  return Object.keys(val).length === 0;
}
// public removeFieldSpaces(e): void {
//   e.target.value = removeSpaces(e.target.value);
// }
// public get(id: string): Observable<any> {
//   return this.http.get<any>(`${environment.urlPath}/user//${id}`);
// }

export function firstDayOfWeek(year, week) {
  // Jan 1 of 'year'
  let d = new Date(year, 0, 1);
  let offset = d.getTimezoneOffset();

  // ISO: week 1 is the one with the year's first Thursday
  // so nearest Thursday: current date + 4 - current day number
  // Sunday is converted from 0 to 7
  d.setDate(d.getDate() + 4 - (d.getDay() || 7));

  // 7 days * (week - overlapping first week)
  d.setTime(
    d.getTime() +
    7 * 24 * 60 * 60 * 1000 * (week + (year == d.getFullYear() ? -1 : 0))
  );

  // daylight savings fix
  d.setTime(d.getTime() + (d.getTimezoneOffset() - offset) * 60 * 1000);

  // back to Monday (from Thursday)
  d.setDate(d.getDate() - 3);

  const timestamp = moment(d.getTime()).unix();

  return moment.unix(timestamp);
}

export function getParamsForTaskCommon(params, type) {
  params.tz = getTimezone();
  let querystring = "";
  
  _.forEach(params, (value, key) => {
    if(type == "MM"){
        querystring += key + "=" + value;
        querystring += "&";
    } else if(type == "IM"){

      if (isNotEmptyVal(value)) {
        querystring += key + "=" + value;
        querystring += "&";
      }
    }
  });
  return querystring.slice(0, querystring.length - 1);
}

export function getParamsForIntake(params) {
  params.tz = getTimezone();
  let querystring = "";
  _.forEach(params, (value, key) => {
    if (isNotEmptyVal(value)) {
      querystring += key + "=" + value;
      querystring += "&";
    }
  });
  return querystring.slice(0, querystring.length - 1);
}


export function mapMatterFilterKeys(data) {
  let obj: any = {};

  // Matter Category
  obj.category = [];
  _.forEach(data.category, (item: any) => {
    let cat: any = {};
    cat.id = item.id.toString();
    cat.name = item.name == "" ? "{Blank}" : item.name;
    obj.category.push(cat);
  });

  obj.contact_roles = [];
  _.forEach(data.contact_roles, (item: any) => {
    let cat: any = {};
    cat.id = item.contact_id.toString();
    cat.name = item.contact_role_name == "" ? "{Blank}" : item.contact_role_name;
    obj.contact_roles.push(cat);
  });
  //matter contact
  obj.matter_contact_roles = [];
  _.forEach(data.matter_contact_roles, (item: any) => {
    let mattercat: any = {};
    mattercat.id = item.contact_id.toString();
    mattercat.name = item.contact_role_name == "" ? "{Blank}" : item.contact_role_name;
    obj.matter_contact_roles.push(mattercat);
  });

  // Matter status and sub-status
  obj.statuses = [];
  _.forEach(data.mattes_statuses, (item: any) => {
    let status: any = {};
    status.id = item.matter_status_id.toString();
    status.name =
      item.matter_status_name == "" ? "{Blank}" : item.matter_status_name;
    status["subStatus"] = [];
    _.forEach(item.matter_sub_status, (currentItem: any) => {
      let subStatus: any = {};
      subStatus.id = currentItem.matter_sub_status_id.toString();
      subStatus.name =
        currentItem.matter_sub_status_name == ""
          ? "{Blank}"
          : currentItem.matter_sub_status_name;
      status["subStatus"].push(subStatus);
    });
    obj.statuses.push(status);
  });

  // Law types
  obj["lawTypes"] = [];
  _.forEach(data.law_types, (item: any) => {
    let list: any = {};
    list.id = item.law_type_id.toString();
    list.name = item.law_type_name == "" ? "{Blank}" : item.law_type_name;
    obj["lawTypes"].push(list);
  });

  // mater types
  obj.type = [];
  _.forEach(data.matter_types, (item: any) => {
    let list: any = {};
    list.id = item.id.toString();
    list.name = item.name == "" ? "{Blank}" : item.name;
    list["subType"] = [];
    _.forEach(item.sub_type, (currentItem: any) => {
      let array: any = {};
      array.id = currentItem.id.toString();
      array.name = currentItem.name == "" ? "{Blank}" : currentItem.name;
      list["subType"].push(array);
    });
    obj.type.push(list);
  });

  // Jurisdiction list
  obj.jurisdictions = [];
  _.forEach(data.jurisdiction, (item: any) => {
    let list: any = {};
    list.id = item.jurisdiction_id.toString();
    list.name = item.name == "" ? "{Blank}" : item.name;
    obj.jurisdictions.push(list);
  });

  // Venue list
  obj.venues = [];
  _.forEach(data.venues, (item: any) => {
    let venue: any = {};
    venue.id = item.id.toString();
    venue.jurisdictionId = item.jurisdiction_id.toString();
    venue.name = item.name == "" ? "{Blank}" : item.name;
    obj.venues.push(venue);
  });

  return obj;
}

export function removeunwantedHTML(value) {
  const translate_re = /&(nbsp|amp|quot|lt|gt);/g;
  let translate = {
    nbsp: " ",
    amp: "&",
    quot: '"',
    lt: "<",
    gt: ">",
  };
  return value
    ? value
      .replace(/<\/?[^>]+>/gi, "")
      .replace(translate_re, (match, entity) => {
        return translate[entity];
      })
    : "";
}

export function getUTCFormattedDate(utcTimeStamp) {
  return moment.unix(utcTimeStamp).utc().format("MM/DD/YYYY");
}

export function getFormattedDateTime(utcTimeStamp) {
  return moment.unix(utcTimeStamp).format("MM/DD/YYYY hh:mm A");
}
export function getFormattedDateTimeForEventsTabIfNotFullDay(utcTimeStamp) {
  return moment.unix(utcTimeStamp).format("MM-DD-YYYY | hh:mm A");
}
export function getFormattedDateTimeForEventsTabIfFullDay(utcTimeStamp) {
  return moment.unix(utcTimeStamp).format("MM-DD-YYYY");
}

export function getUTCCustomFormattedDate(utcTimeStamp, format) {
  return moment.unix(utcTimeStamp).utc().format(format);
}

export function getCustomFormattedDateTime(utcTimeStamp, format) {
  return moment.unix(utcTimeStamp).format(format);
}

export function getUTCDifferentFormattedDate(utcTimeStamp) {
  return moment.unix(utcTimeStamp).utc().format("DD MMM YYYY");
}

export function setUnixFormattedDate(utcTimeStamp) {
  return moment(utcTimeStamp).unix();
}

export function getUnixFormattedDate(utcTimeStamp) {
  return moment.unix(utcTimeStamp).utc();
}

export function getUnixFormattedDateWithoutTime(utcTimeStamp) {
  return moment.unix(utcTimeStamp);
}

export function getDateandTime(utcTimeStamp) {
  return moment.unix(utcTimeStamp).format("MMM DD, YYYY,  hh:mm A");
}

export function getTimeandDate(utcTimeStamp) {
  return moment.unix(utcTimeStamp).format("hh:mm A  \xa0\xa0\xa0\xa0  MMM DD, YYYY");
}
export function getTime(utcTimeStamp) {
  return moment.unix(utcTimeStamp).format("HH:mm");
}

export function getDateTimeFormatted(utcTimeStamp) {
  return moment.unix(utcTimeStamp).format("MM/DD/YYYY hh:mm A");
}
export function getDateWithGmtTimeZone(eventDate) {
  if (
    _isNotEmptyVal(eventDate) ||
    ((eventDate !== undefined || eventDate !== null) &&
      eventDate instanceof Date)
  ) {
    return moment(eventDate).format("MM/DD/YYYY");
  } else {
    return undefined;
  }
}

export function getDateWithLocalTimeZone(eventDate) {
  return _isNotEmptyVal(eventDate) && eventDate !== "Invalid date"
    ? new Date(eventDate)
    : "";
}

export function replaceHtmlEntites(s) {
  let translate_re = /&(nbsp|amp|quot|lt|gt);/g;
  let translate = {
    nbsp: " ",
    amp: "&",
    quot: '"',
    lt: "<",
    gt: ">",
  };
  if (s) {
    return s.replace(translate_re, function (match, entity) {
      return translate[entity];
    });
  } else {
    return "";
  }
}

export function replaceQuoteWithActual(text) {
  const translate_re = /(&quot|&#34;)/g;
  const translate = {
    quot: '"',
    "&#34;": '"',
  };
  return text.replace(translate_re, (match, entity) => {
    return translate[entity];
  });
}

export function dataURItoBlob(dataURI) {
  const byteString = atob(dataURI.split(",")[1]);
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], { type: "image/jpeg" });
}

export interface Blob {
  filename: any;
  name: any;
  readonly size: number;
  readonly type: string;
  arrayBuffer(): Promise<ArrayBuffer>;
  slice(start?: number, end?: number, contentType?: string): Blob;
  stream(): ReadableStream;
  text(): Promise<string>;
}

/**
 * To format the nummber in currency format - $123.00
 * @param amount - Amount.
 */
export function formatCurrency(amount) {
  const sign = amount;
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
  return formatter.format(sign);
}

export function formatCurrencyWithEmptyValDecimal(amount) {
  const sign = amount < 0 ? "-" : "";
  const decimalValue = (amount % 1) === 0 ? "00" : `${(amount % 1)}`.split(".")[1].substr(0, 2);
  const amt = (`${parseInt(amount, 10)}`).split("").reverse().join("").match(/[0-9]{1,3}/g).join(",").split("").reverse().join("");
  return (amount % 1) === 0 ? `${sign}${amt}` : `${sign}${amt}.${decimalValue}`;
}

export function formatCurrencyWithoutDollar(amount) {
  return amount.split(".").length == 2 ? `${amount}` : `${amount}.00`;
}




export function utcDateFilter(item, startOrEnd, format) {
  const fulldayTime = _setFulldayTime(item, startOrEnd);
  const date = moment.unix(fulldayTime).format(format);
  return date;
}

function _setFulldayTime(timestamp, setTimeFor) {
  let date = _getUtcMoment(timestamp);
  let isCorrectFullDayTime;
  const time = _getTimeString(date);
  isCorrectFullDayTime = _isTimeValid(time, setTimeFor);
  date = isCorrectFullDayTime ? date : moment.unix(timestamp);
  return moment(date.valueOf()).unix();
}

function _isValidFullDayDate(timestamp, dateFor) {
  let date = _getUtcMoment(timestamp);
  let time = _getTimeString(date);
  return _isTimeValid(time, dateFor);
}

function _getUtcMoment(timestamp) {
  let format = "ddd MMM DD YYYY HH:mm:ss";
  let date: any = moment.unix(timestamp);
  date = date.utc().format(format);
  date = moment(date, format);
  return date;
}

function _getTimeString(date) {
  return (
    prependZero(date.hour()) +
    ":" +
    prependZero(date.minute()) +
    ":" +
    prependZero(date.second())
  );
}

function _isTimeValid(time, timeFor) {
  switch (timeFor) {
    case "start":
      return time === "00:00:00";
    case "end":
      return time === "23:59:59";
  }
}

function prependZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

 /**
  * Sort an array of objects by name key.
  * @param arr - Array to be sorted.
  */
export function sortByName(arr, name = "name") {
    if (!arr) {
      return [];
    }
    return arr.sort((a, b) => {
      if (a[name].toLowerCase() < b[name].toLowerCase()) {
        return -1;
      } else if (a[name].toLowerCase() > b[name].toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    });
  }
