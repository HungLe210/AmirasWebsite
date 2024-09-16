# Cookie
## Client side
**Import**
```typescript
import { ClientSideCookieClient } from '@utils';
```

**Get cookie** \
Get all available cookies
```typescript
let cookies: {[key: string]: string} = ClientSideCookieClient.getAll();
```

Get cookie value base on key / name. This will return undefined if `name` doesn't exist.
```typescript
let value: string | undefined = ClientSideCookieClient.get('name');
```

**Set / Create a Cookie**
```typescript
ClientSideCookieClient.set(
    'name', 
    'value',
    opts
)
```

**Remove / Delete a Cookie**
```typescript
ClientSideCookieClient.remove(
    'name', 
    opts
)
```

The `opts` is optional that config the cookie that will set/create. `opts` is an `object` that include:
* `expires?: number | Date | undefined` : Define when the cookie will be removed. Value can be a Number which will be interpreted as days from time of creation or a Date instance. If omitted, the cookie becomes a session cookie.
* `path?: string | undefined`: Define the path where the cookie is available. Defaults to '/'
* `domain?: string | undefined`: Define the domain where the cookie is available. Defaults to the domain of the page where the cookie was created.
* `secure?: boolean | undefined`: A Boolean indicating if the cookie transmission requires a secure protocol (https). Defaults to false.
* `sameSite?: "strict" | "Strict" | "lax" | "Lax" | "none" | "None" | undefined`: Asserts that a cookie must not be sent with cross-origin requests,
providing some protection against cross-site request forgery attacks (CSRF)

## Server side
**Import**
```typescript
import { ServerSideCookieClient } from '@utils';
```

**Get cookie**
Get all available cookies
```typescript
let cookies: {[key: string]: string} = ServerSideCookieClient.getAll();
```

Get cookie value base on key / name. This will return undefined if `name` doesn't exist.
```typescript
let value: string | undefined = ServerSideCookieClient.get('name');
``` 


**Set / Create a Cookie**
```typescript
ServerSideCookieClient.set(
    'name', 
    'value',
    opts
)
```

**Remove / Delete a Cookie**
```typescript
ServerSideCookieClient.remove(
    'name', 
    opts
)
```

`opts` is an optional parameter. `opts` is an `object` that include
* `name: string`: A string with the name of a cookie.
* `value: string`: A string containing the value of the cookie.
* ` expires?: number | CookieSerializeOptions['expires']`: A number of milliseconds or Date interface containing the expires of the cookie. 
* `domain?: string | undefined`: By default, no domain is set, and most clients will consider the cookie to apply to only the current domain.
* `path?: string | undefined`: By default, the path is considered the "default path".
* `sameSite?: true | false | "lax" | "strict" | "none" | undefined`: This is an attribute that has not yet been fully standardized, and may change in the future. This also means many clients may ignore this attribute until they understand it.
* `secure?: boolean | undefined`: *Note* be careful when setting this to `true`, as compliant clients will ot send the cookie back to the server in the future if the browser does not have an HTTPS connection.
*  `httpOnly?: boolean | undefined`: When truthy, the `HttpOnly` attribute is set, otherwise it is not. By default, the `HttpOnly` attribute is not set. *Note* be careful when setting this to true, as compliant clients will not allow client-side JavaScript to see the cookie in `document.cookie`.
* `maxAge?: number | undefined`: Specifies the number (in seconds) to be the value for the `Max-Age` `Set-Cookie` attribute. The given number will be converted to an integer by rounding down. By default, no maximum age is set.
* `priority?: "low" | "medium" | "high" | undefined`: Specifies the `string` to be the value for the [`Priority` `Set-Cookie` attribute][rfc-west-cookie-priority-00-4.1].
    