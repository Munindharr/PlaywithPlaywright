import {test, expect} from '@playwright/test';

test('Frame Handling using page.Frame()', async ({page}) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');
    const allFrames = page.frames();    
    console.log("Total number of frames in the page: " + allFrames.length);

    const frame1 = page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_1'});
    //const frame1 = page.frame({url: /\/frame_1$/});
    if (!frame1) {
        throw new Error('Could not find frame_1.html');
    }
    const textInput = frame1.locator('input[name="mytext1"]');
    await textInput.fill('Play wright - Frame Handling using frame');
    await page.pause();
    await expect(textInput).toHaveValue('Play wright - Frame Handling using frame');
});
test('Frame Handling using page.FrameLocator()', async ({page}) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');
    const frame2 = page.frameLocator('frame[src="frame_1.html"]');

    const textInput = frame2.locator('input[name="mytext1"]');
    await textInput.fill('Play wright - Frame Handling using frame Locator');
});
test.only('Nested Frame Handling', async ({page}) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');
    const frame3 = page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_3'});


    const childFrames = frame3?.childFrames();
    const radioButtonoption = childFrames[0].getByRole('radio', { name: 'I am a human' });
    await radioButtonoption.click({force: true});

    const checkBoxOption = childFrames[0].getByRole('checkbox', { name: 'Form Autofilling' });
    await checkBoxOption.click({force: true});

    await page.waitForTimeout(5000); 
    await page.close(); 
});
