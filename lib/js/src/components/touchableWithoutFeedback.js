// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var List                  = require("bs-platform/lib/js/list.js");
var $$Array               = require("bs-platform/lib/js/array.js");
var ReasonReact           = require("reason-react/lib/js/src/ReasonReact.js");
var Js_undefined          = require("bs-platform/lib/js/js_undefined.js");
var ReactNative           = require("react-native");
var UtilsRN$BsReactNative = require("../private/utilsRN.js");

function make(accessible, accessibilityComponentType, accessibilityTraits, delayLongPress, delayPressIn, delayPressOut, disabled, hitSlop, onLayout, onPress, onPressIn, onPressOut, pressRetentionOffset, style) {
  var partial_arg = {
    accessible: Js_undefined.from_opt(UtilsRN$BsReactNative.optBoolToOptJsBoolean(accessible)),
    delayLongPress: Js_undefined.from_opt(delayLongPress),
    delayPressIn: Js_undefined.from_opt(delayPressIn),
    delayPressOut: Js_undefined.from_opt(delayPressOut),
    disabled: Js_undefined.from_opt(UtilsRN$BsReactNative.optBoolToOptJsBoolean(disabled)),
    hitSlop: Js_undefined.from_opt(hitSlop),
    onLayout: Js_undefined.from_opt(onLayout),
    onPress: Js_undefined.from_opt(onPress),
    onPressIn: Js_undefined.from_opt(onPressIn),
    onPressOut: Js_undefined.from_opt(onPressOut),
    pressRetentionOffset: Js_undefined.from_opt(pressRetentionOffset),
    style: Js_undefined.from_opt(style),
    accessibilityComponentType: Js_undefined.from_opt(UtilsRN$BsReactNative.option_map((function (x) {
                if (x >= 310731477) {
                  if (x >= 735392028) {
                    return "radiobutton_unchecked";
                  } else {
                    return "radiobutton_checked-none";
                  }
                } else if (x >= -639606286) {
                  return "button";
                } else {
                  return "none";
                }
              }), accessibilityComponentType)),
    accessibilityTraits: Js_undefined.from_opt(UtilsRN$BsReactNative.option_map((function (traits) {
                var to_string = function (param) {
                  if (param >= -522290177) {
                    if (param >= -50329203) {
                      if (param !== 5343647) {
                        if (param >= 829237851) {
                          if (param >= 1030299483) {
                            return "image";
                          } else {
                            return "selected";
                          }
                        } else if (param >= 15272742) {
                          return "summary";
                        } else {
                          return "header";
                        }
                      } else {
                        return "key";
                      }
                    } else if (param >= -123392599) {
                      if (param >= -66829956) {
                        return "disabled";
                      } else {
                        return "adjustable";
                      }
                    } else if (param >= -487088280) {
                      return "search";
                    } else {
                      return "allowsDirectInteraction";
                    }
                  } else if (param >= -727597924) {
                    if (param >= -683287213) {
                      if (param >= -639606286) {
                        return "button";
                      } else {
                        return "startsMedia";
                      }
                    } else if (param >= -707934868) {
                      return "pageTurn";
                    } else {
                      return "frequentUpdates";
                    }
                  } else if (param >= -922086728) {
                    if (param >= -856044371) {
                      return "text";
                    } else {
                      return "none";
                    }
                  } else if (param >= -944564230) {
                    return "link";
                  } else {
                    return "plays";
                  }
                };
                return $$Array.of_list(List.map(to_string, traits));
              }), accessibilityTraits))
  };
  var partial_arg$1 = ReactNative.TouchableWithoutFeedback;
  return (function (param) {
      return ReasonReact.wrapJsForReason(partial_arg$1, partial_arg, param);
    });
}

exports.make = make;
/* ReasonReact Not a pure module */