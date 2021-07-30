<?php

namespace Elyaash\CurrencyInput;

use Laravel\Nova\Fields\Field;

class CurrencyInput extends Field
{
    /**
     * The field's component.
     *
     * @var string
     */
    public $component = 'currency-input';

    /**
     * The meta data for the element.
     *
     * @var array
     */
    public $meta = [
        'currency' => 'USD',
        'formatOnDisplay' => true
    ];

    /**
     * Set currency code
     * @param $currency
     */
    public function currency($currency) {
        return $this->withMeta([
            'currencycurrency' => $currency
        ]);
    }

    /**
     * Set flag true/false to apply formatting on display
     * @param bool $flag
     * @return mixed
     */
    public function formatOnDisplay($flag = true) {
        return $this->withMeta([
            'formatOnDisplay' => $flag
        ]);
    }
}
