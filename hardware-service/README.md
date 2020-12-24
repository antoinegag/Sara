# Hardware Service

Simple service that provides an HTTP interface to communicate with the hardware.

# Endpoints

## Lights

Used to control the lights

**URL** : `/lights/`

**Method** : `POST`

**Data constraints**

```json
{
  "action":
    "TOGGLE" |
    "INCREASE_BRIGHTNESS" |
    "DECREASE_BRIGHTNESS" |
    "COLOR_WHITE" |
    "COLOR_CYCLE"
}
```

### Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "success": true
}
```

### Error Response

#### Invalid action

**Condition** : If 'action' is not valid

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
  "success": false,
  "code": "UNKNOWN_ACTION",
  "error": "Unknown action <action>"
}
```

#### Undefined action

**Condition** : If 'action' is not defined

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
  "success": false,
  "code": "MISSING_PARAMETER",
  "error": "Missing parameter: action"
}
```
