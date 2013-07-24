describe('Factorial App Tests', function(){
  var factorial;

  beforeEach(function(){
    factorial = Factorial();
  });

  it('should exist!', function () {
    expect(factorial).toBeDefined();
  });

  it('should know how to do a factorial', function () {
    var fac5 = factorial.solve(5);
    expect(fac5).toEqual(120);
  });

  it('should know how to really factorial', function () {
    var fac13 = factorial.solve(13);
    expect(fac13).toEqual(6227020800);
  });

  it('should tell how many times it has been run', function () {
    factorial.solve(5);
    factorial.solve(5);

    var runCount = factorial.processCount;

    expect(runCount).toBeGreaterThan(0);
  });

  it('should only calculate a factoial once for a specific parameter', function () {
    factorial.solve(5);
    factorial.solve(5);

    var runCount = factorial.processCount;

    expect(runCount).toEqual(1);
  });
});