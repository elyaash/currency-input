# Laravel Nova Currency Field

A laravel nova filed for currency input


## Installation

You can install the package in to a Laravel app that uses [Nova](https://nova.laravel.com) via composer:

```bash
composer require elyaash/currency-input
```

## Usage

In your resource class, add the following to your `fields` method:

```php
use Elyaash\CurrencyInput\CurrencyInput;

....

CurrencyInput::make("Amount");
```
Default currency is USD, but other currencies (EUR, JPY) can also be set using **currency** method, see example below.

```
CurrencyInput::make("Amount")
    ->currency('EUR')  
```

Default formatting on display is on, but it can be turned off using **formatOnDisplay**, see example below.
``` 
CurrencyInput::make("Amount")
    ->formatOnDisplay(false)  
```

Form View
![Form view](docs/formview.png)

Detail View:
![Form view](docs/detailview.png)
