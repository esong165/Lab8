const formatVolumeIconPath = require('../assets/scripts/main');

describe('formatVolumeIconPath Level 3', () => {
    test('Upper Bound Volume', () => {
        expect(formatVolumeIconPath(100)).toContain('3');
    });
    test('Middle Volume', () => {
        expect(formatVolumeIconPath(78)).toContain('3');
    });
    test('Lower Bound Volume', () => {
        expect(formatVolumeIconPath(67)).toContain('3');
    });
});

describe('formatVolumeIconPath Level 2', () => {
    test('Upper Bound Volume', () => {
        expect(formatVolumeIconPath(66)).toContain('2');
    });
    test('Middle Volume', () => {
        expect(formatVolumeIconPath(48)).toContain('2');
    });
    test('Lower Bound Volume', () => {
        expect(formatVolumeIconPath(34)).toContain('2');
    });
});

describe('formatVolumeIconPath Level 1', () => {
    test('Upper Bound Volume', () => {
        expect(formatVolumeIconPath(33)).toContain('1');
    });
    test('Middle Volume', () => {
        expect(formatVolumeIconPath(16)).toContain('1');
    });
    test('Lower Bound Volume', () => {
        expect(formatVolumeIconPath(1)).toContain('1');
    });
});

describe('formatVolumeIconPath Level 0', () => {
    test('0 Volume', () => {
        expect(formatVolumeIconPath(0)).toContain('0');
    });
});