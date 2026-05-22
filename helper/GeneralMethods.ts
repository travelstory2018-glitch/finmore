import { expect, Locator, Page } from '@playwright/test';



// export function click(locator: Locator) {
//     return locator.click();
// }

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

// export function fill(locator: Locator, value: string) {
//     return locator.fill(value);
// }

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
        pressEnter = false,
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

    if (pressEnter) {
        await locator.press('Enter');
    }
}


export function select(locator: Locator, value: string) {
    return locator.selectOption(value);
}



export function expectVisible(locator: Locator) {
    return expect(locator).toBeVisible();
}



export function expectText(locator: Locator, text: string) {
    return expect(locator).toHaveText(text);
}



export function waitForUrl(page: Page, url: string | RegExp) {
    return page.waitForURL(url);
}

