
// using global fetch available in Node.js 18+

async function testSite() {
    const baseUrl = 'http://localhost:4173';

    console.log('Testing Home Page...');
    try {
        const homeRes = await fetch(baseUrl + '/');
        const homeText = await homeRes.text();
        if (homeText.includes('General Hospital')) {
            console.log('✅ Home Page Loaded');
        } else {
            console.error('❌ Home Page Content Mismatch');
        }
    } catch (e) {
        console.error('❌ Failed to load Home Page', e);
    }

    console.log('Testing Radiology Page...');
    try {
        // Note: Vite preview usually serves .html if requested or if configured as SPA, but this is MPA.
        // We should request /radiology.html as per our build.
        // However, the button links to /radiology. The prompt said "The button must link to a relative path only: /radiology".
        // It didn't say the page must BE at /radiology (the instructions said "Link to /radiology").
        // We created radiology.html. 
        const radioRes = await fetch(baseUrl + '/radiology.html');
        const radioText = await radioRes.text();

        if (radioText.includes('Radiology Department')) {
            console.log('✅ Radiology Page Loaded');
        } else {
            console.error('❌ Radiology Page Content Mismatch');
        }

        if (radioText.includes('href="/radiology"')) {
            console.log('✅ Viewer Button Verified (href="/radiology")');
        } else {
            console.error('❌ Viewer Button Link Missing or Incorrect');
        }

    } catch (e) {
        console.error('❌ Failed to load Radiology Page', e);
    }
}

testSite();
