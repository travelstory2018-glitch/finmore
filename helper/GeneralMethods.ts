import { expect, Locator, Page } from '@playwright/test';



// click


export async function click(locator: Locator, name?: string) {
    try {
        console.log(` Click on: ${name ?? 'unknown'}`);

        await locator.waitFor({ state: 'visible', timeout: 10000 });
        await locator.click();

        console.log(`Click success: ${name ?? 'unknown'}`);
    } catch (error) {
        console.error(`Click failed: ${name ?? 'unknown'}`);

        throw new Error(
            `Click failed on ${name ?? 'unknown'}\n${error}`
        );
    }
}

// fill


export async function fill(
    locator: Locator,
    value: string,
    options?: {
        clear?: boolean;
        timeout?: number;
    }
) {
    const {
        clear = true,
        timeout = 5000,
    } = options || {};

    await expect(locator).toBeVisible({ timeout });
    await expect(locator).toBeEnabled({ timeout });

    if (clear) {
        await locator.clear();
    }

    await locator.fill(value);

    // перевірка що значення реально заповнилось
    await expect(locator).toHaveValue(value);
}


//  select

export async function select(
    locator: Locator,
    value: string,
    options?: {
        timeout?: number;
    }
) {
    const {
        timeout = 5000,
    } = options || {};

    try {
        console.log(`Select option: ${value}`);

        await expect(locator).toBeVisible({ timeout });
        await expect(locator).toBeEnabled({ timeout });

        await locator.selectOption(value);

        // перевірка що значення реально вибралось
        await expect(locator).toHaveValue(value);

        console.log(`Select success: ${value}`);
    } catch (error) {
        console.error(`Select failed: ${value}`);

        throw new Error(
            `Select failed for value "${value}"\n${error}`
        );
    }
}




// expectVisible



export function expectText(locator: Locator, text: string) {
    return expect(locator).toHaveText(text);
}



export function waitForUrl(page: Page, url: string | RegExp) {
    return page.waitForURL(url);
}

export async function expectVisible(
    locator: Locator,
    options?: {
        timeout?: number;
        name?: string;
    }
) {
    const {
        timeout = 5000,
        name = 'unknown',
    } = options || {};

    try {
        console.log(`Check visible: ${name}`);

        await expect(locator).toBeVisible({ timeout });

        console.log(`Visible success: ${name}`);
    } catch (error) {
        console.error(`Visible check failed: ${name}`);

        throw new Error(
            `Element is not visible: ${name}\n${error}`
        );
    }
}
