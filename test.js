import test from 'ava';

test.skip('foo', t => {
    // t.pass();
    t.fail();
});

test('bar', async t => {
    const bar = Promise.resolve('bar');

    t.is(await bar, 'bar');
});
