# HTTP HTTPS и их параметры 
___________________________________________________
## Лабораторная работа №1

В данной работе вы будете отправлять HTTP запросы и изучать HTTP ответы.
### Цель работы
Познакомиться с протоколом HTTP и протоколом HTTPS, а так же особенностями установления соединения между источником и получателем.
___________________________________________________

### РГУПС

Скрипт для получения информации о сайте  __[‍РГУПС](https://www.rgups.ru)__: 

`curl rgups.ru -I -v -L -k`
  
Ключи:

`-I` - Ключ, с помощью которого получаем заголовки HTTP, без тела.  
`-v` - Ключ для вывода развернутой информации о запросе.  
`-L` - Ключ для следования автоматически перенаправлениям при запросе (код 301, 302).  
`-k` - Ключ для игнорирования проверок SSL-сертификата.


```shell
  #Запрос
> HEAD / HTTP/1.1 - строка указывает на тип запроса и его версию
> Host: www.rgups.ru - заголовок Host с указанием имени сервера
> User-Agent: curl/8.4.0 - указывает устройство, с которого был отправлен запрос
> Accept: */* - тип принимаемого содержимого
> #Ответ
< HTTP/1.1 200 OK - ответ сервера, успешная обработка команды
< Server: nginx/1.19.1 - информацию о сервере, который обрабатывал команду
< Date: Wed, 20 Dec 2023 20:14:44 GMT - дата и время получения ответа от сервера
< Content-Type: text/html; charset=utf-8 - тип и кодировка содержимого
< Connection: keep-alive - указывает серверу, что соединение должно быть постоянным
< X-Powered-By: ProcessWire CMS - ПО сервера, т.е. работает на ProcessWire CMS
< Set-Cookie: wire=79a9582b188eaf2ac68ece816ccb7940; path=/; HttpOnly; SameSite=Lax - установка куки
< Expires: Thu, 19 Nov 1981 08:52:00 GMT - некешируемый ответ о его дате и времени истечения срока действия 
< Cache-Control: no-store, no-cache, must-revalidate - инструкция для кеширования : указывает кешу не сохранять копию контента, ответ не нужно хранить, не предоставлять пользователю закешированный контент
< Pragma: no-cache - запрет кеширования со стороны клиента

```
### GitHub

Скрипт для получения информации о сайте  __[GitHub](https://github.com/)__:

`curl github.com -I -v -L -k`


```shell
> HEAD / HTTP/1.1
> Host: github.com
> User-Agent: curl/8.4.0
> Accept: */*
>
< HTTP/1.1 200 OK
< Server: GitHub.com
< Date: Wed, 20 Dec 2023 21:34:27 GMT
< Content-Type: text/html; charset=utf-8
< Vary: X-PJAX, X-PJAX-Container, Turbo-Visit, Turbo-Frame, Accept-Language, Accept-Encoding, Accept, X-Requested-With - заголовок указывает на факторы, которые могут влиять на кэширование ответа на стороне клиента или прокси-сервера
< content-language: en-US - язык содержимого в ответе
< ETag: W/"c5b5c6d0ca8b72f620a6f33f340c46c8" - метка для сопоставления контента с кеш-версией
< Cache-Control: max-age=0, private, must-revalidate 
< Strict-Transport-Security: max-age=31536000; includeSubdomains; preload - гарантирует то, что браузер будет подключаться по HTTPS в теч. определенного времени
< X-Frame-Options: deny - мера безопасности, защита от кликджекинга
< X-Content-Type-Options: nosniff - заголовок, который сообщает браузеру, чтобы он не пытался угадать и интерпретировать тип контента, отличный от того, что указан в Content-Type
< X-XSS-Protection: 0 - мера защиты от межсайтового скриптинга, 0 - фильтр выключен
< Referrer-Policy: origin-when-cross-origin, strict-origin-when-cross-origin - управляет передачей информации о пред. странице при переходе по ссылке
< Content-Security-Policy: default-src 'none'; base-uri 'self'; child-src 
< Set-Cookie: _octo=GH1.1.1544926651.1703108072; Path=/; Domain=github.com; Expires=Fri, 20 Dec 2024 21:34:32 GMT; Secure; SameSite=Lax
< Set-Cookie: logged_in=no; Path=/; Domain=github.com; Expires=Fri, 20 Dec 2024 21:34:32 GMT; HttpOnly; Secure; SameSite=Lax
< Accept-Ranges: bytes - поддержка запросов частями (байтами) => возможность возобновлять загрузку, а не начинать ее с начала
< X-GitHub-Request-Id: 155B:2E6955:1CD579E:1D2F7EB:65835DE7 - идентификатор запроса, присвоенный сервером для отслеживания запросов
```

### РЖД

Скрипт для получения информации о сайте  __[РЖД](https://www.rzd.ru/)__:

`curl rzd.ru -I -v -L -k --User-agent "Yandex"`


```shell
> HEAD / HTTP/1.1
> Host: rzd.ru
> User-Agent: Yandex
> Accept: */*
>
< HTTP/1.1 200
< Content-Type: text/html;charset=utf-8
< Content-Length: 198383 - длина содержимого в байтах
< Connection: keep-alive
< Date: Wed, 20 Dec 2023 22:04:14 GMT
< Vary: Accept-Encoding
< X-UCM-Pod-Name: inex-ucm-5574464c4b-6p5vr - указывает на имя пода
< Strict-Transport-Security: max-age=15724800; includeSubDomains
< Via: nginx3 - прокси-сервер, через кот. прошел запрос
< X-Frame-Options: sameorigin
< Set-Cookie: session-cookie=17a2a9638878fb5d25a3f95518991a24aea1390a56295efd0bd709dface6eb1e9d226205a23a6ded43b0ef9411c653f8; Max-Age=86400; Path=/; secure
< X-XSS-Protection: 1; mode=block - защита от XSS включена
```

### Yandex

Скрипт для получения информации о сайте  __[Яндекс](https://yandex.ru/)__:

`curl yandex.ru -I -v -L -k`

```shell
> HEAD / HTTP/1.1
> Host: yandex.ru
> User-Agent: curl/8.4.0
> Accept: */*
>
< HTTP/1.1 200 Ok
< Cache-Control: no-cache, no-store, max-age=0, must-revalidate
< Content-Security-Policy: frame-ancestors 
< Content-Security-Policy-Report-Only: default-src 'none'; connect-src 'self' 
< Content-Type: text/html; charset=utf-8
< Set-Cookie: _yasc=ofsxYlgZn8ihHzxXgLlnlPgQePv+nLisLr9rL8Gqb16NrqAlIbOal/oROffC6I84iQ==; domain=.dzen.ru; path=/; expires=Sat, 17 Dec 2033 22:12:01 GMT; secure
< X-Content-Type-Options: nosniff
< X-Requestid: 3363166903.167.1703110321746.29047
< X-XSS-Protection: 1; mode=block
< X-Yandex-Req-Id: 1703110321714256-1814549565713727345700187-production-app-host-vla-zen-444
```

### Python

Скрипт для получения информации о сайте  __[Python](https://www.python.org/)__:

`curl python.org -I -v -L -k`


```shell
> HEAD / HTTP/1.1
> Host: python.org
> User-Agent: curl/8.4.0
> Accept: */*
>
< HTTP/1.1 200 OK
< Connection: keep-alive
< Content-Length: 51202
< Server: nginx
< Content-Type: text/html; charset=utf-8
< X-Frame-Options: SAMEORIGIN
< Via: 1.1 vegur, 1.1 varnish, 1.1 varnish
< Accept-Ranges: bytes
< Date: Wed, 20 Dec 2023 22:16:31 GMT
< Age: 3166 - кол-во секунд, кот. прошли после кеширования ответа
< X-Served-By: cache-iad-kiad7000025-IAD, cache-bma1675-BMA - 2 сервера кеширования, которыми был обработан запрос
< X-Cache: HIT, HIT - запрос получен из кэша на 2 уровнях
< X-Cache-Hits: 159, 3 - кол-во обращений на каждом уровне кеша
< X-Timer: S1703110592.579498,VS0,VE0 - затраченное на обработку запроса время со стороны сервера
< Vary: Cookie
< Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

### Git

Скрипт для получения информации о сайте  __[Git](https://git-scm.com/)__:

`curl git-scm.com -I -v -L -k`


```shell
> HEAD / HTTP/1.1
> Host: git-scm.com
> User-Agent: curl/8.4.0
> Accept: */*
>
< HTTP/1.1 200 OK
< Date: Wed, 20 Dec 2023 22:25:59 GMT
< Content-Type: text/html; charset=utf-8
< Connection: keep-alive
< X-Frame-Options: SAMEORIGIN
< X-Xss-Protection: 1; mode=block
< X-Content-Type-Options: nosniff
< X-Download-Options: noopen - для предотвращения фишинговых атак файлы не должны открываться по умолчанию после загрузки
< X-Permitted-Cross-Domain-Policies: none - указывает, разрешен или нет файл междоменной политики (crossdomain.xml)
< Referrer-Policy: strict-origin-when-cross-origin - указывает, какая информация о реферере, отправленная в заголовке Referer, должна быть включена в сделанные запросы
< Vary: Accept
< Cache-Control: public, max-age=14400
< Etag: W/"4555dc199cf8e5ac99f1f0fd9b1e23ed"
< X-Request-Id: e9223586-06e6-4b94-818f-eea274fad8e8
< X-Runtime: 0.007347 - время, кот. было затрачено на выполнение запроса на стороне сервера
< Via: 1.1 vegur
< CF-Cache-Status: HIT
< Age: 1051
< Server: cloudflare
< CF-RAY: 838b4de849121c7b-AMS
```

### JetBrains

Скрипт для получения информации о сайте  __[JetBrains](https://www.jetbrains.com/)__:

`curl jetbrains.com -I -v -L -k`


```shell
> HEAD / HTTP/1.1
> Host: jetbrains.com
> User-Agent: curl/8.4.0
> Accept: */*
>
< HTTP/1.1 200 OK
< Content-Type: text/html; charset=utf-8
< Content-Length: 48898
< Connection: keep-alive
< Date: Wed, 20 Dec 2023 22:38:08 GMT
< Server: nginx
< X-Content-Type-Options: nosniff
< Referrer-Policy: same-origin
< Expires: Wed, 20 Dec 2023 22:38:08 GMT - указывает на дату и время истечения срока действия ответа в кеше
< Cache-Control: max-age=0
< Pragma: no-cache
< X-Frame-Options: DENY
< X-Content-Type-Options: nosniff
< X-Xss-Protection: 1; mode=block
< Strict-Transport-Security: max-age=31536000;
< Vary: Accept-Encoding
< Via: 1.1 d5d7b369f72f565a0dffcd2db50ec516.cloudfront.net (CloudFront)
< Alt-Svc: h3=":443"; ma=86400
< Age: 66
< Set-Cookie: cf_country-region=RU-VGG; Domain=jetbrains.com; Path=/; Secure
< X-Cache: Hit from cloudfront
< X-Amz-Cf-Pop: ARN56-P2
< X-Amz-Cf-Id: pMmFZ6qv-OmTX74OEt5a4upzoED4-fX1FlXAan9hrmNLLeGKKf4yaw==
```

### VSC

Скрипт для получения информации о сайте  __[VSC](https://code.visualstudio.com/)__:

`curl code.visualstudio.com -I -v -L -k`
 

```shell
> HEAD / HTTP/1.1
> Host: code.visualstudio.com
> User-Agent: curl/8.4.0
> Accept: */*
>
< HTTP/1.1 200 OK
< Date: Wed, 20 Dec 2023 22:41:39 GMT
< Content-Type: text/html; charset=utf-8
< Content-Length: 49565
< Connection: keep-alive
< ETag: W/"c19d-7N/sxJ/VGB+Vb87AaLiwrxrzm6M"
< Strict-Transport-Security: max-age=31536000; includeSubDomains
< Content-Security-Policy: frame-ancestors 'self' - управляет ресурсами, которые пользовательскому агенту разрешено загружать для данной страницы
< X-Frame-Options: SAMEORIGIN
< X-XSS-Protection: 1; mode=block
< X-Content-Type-Options: nosniff
< X-Powered-By: ASP.NET
< x-azure-ref: 20231220T224138Z-aszum42sv11x58grd0efvwkabc00000000kg00000000k358
< X-Cache: CONFIG_NOCACHE
< Accept-Ranges: bytes
```